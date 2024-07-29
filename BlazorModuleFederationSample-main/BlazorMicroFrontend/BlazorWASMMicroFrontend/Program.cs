using BlazorWASMMicroFrontend.Pages;
using Blazor.ModuleFederation.Angular;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Text;
using System.Text.Json;

namespace BlazorWASMMicroFrontend;

public static class Program
{
    public static async Task Main(string[] args)
    {
        var builder = WebAssemblyHostBuilder.CreateDefault(args);

        builder.AddConfigClassAsync();

        builder.RootComponents.RegisterCustomElement<PokemonCards>("pokemon-cards");

        builder.RootComponents.RegisterForModuleFederation<PokemonCards>();
        builder.RootComponents.RegisterForModuleFederation<PokemonGrid>();

        builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

        await builder.Build().RunAsync();
    }

    public static void AddConfigClassAsync(this WebAssemblyHostBuilder builder)
    {
        var value = JsonSerializer.Serialize(new Configurations());

        using var stream = new MemoryStream(Encoding.UTF8.GetBytes(value ?? ""));

        builder.Configuration.AddJsonStream(stream);
    }
}