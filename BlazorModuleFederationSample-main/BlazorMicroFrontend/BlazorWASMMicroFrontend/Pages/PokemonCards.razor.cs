using BlazorWASMMicroFrontend.Domain;
using BlazorWASMMicroFrontend.Interfaces.APIEndpoints;
using Microsoft.AspNetCore.Components;
using Radzen;
using Refit;

namespace BlazorWASMMicroFrontend.Pages
{
    public partial class PokemonCards
    {
        [Inject]
        private IConfiguration? _configuration { get; init; }

        private const int _pageSize = 8;
        private int _totalRecords;

        private PokedexData? _pokedexData;
        private IPokeApi? _pokeApi;

        [Parameter]
        public int StartFromId { get; set; } = 0;
        [Parameter]
        public EventCallback OnDataLoaded { get; set; }

        protected override async Task OnInitializedAsync()
        {
            await LoadDataAsync(_pageSize, StartFromId - 1);
        }

        async Task LoadDataAsync(LoadDataArgs args)
        {
            await LoadDataAsync(args.Top.Value, (StartFromId - 1) + args.Skip.Value);
        }

        protected async Task LoadDataAsync(int take, int offset)
        {
            try
            {
                _pokeApi = RestService.For<IPokeApi>(_configuration!["PokeApiBaseUrl"]!);

                _pokedexData = await _pokeApi.GetPokedexData(take, offset);

                _totalRecords = _pokedexData.Count - StartFromId;

                await OnDataLoaded.InvokeAsync();
            }
            catch (ApiException ex)
            {
            }
        }
    }
}