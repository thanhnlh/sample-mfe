using Refit;
using BlazorWASMMicroFrontend.Domain;
using System.Collections.Generic;

namespace BlazorWASMMicroFrontend.Interfaces.APIEndpoints
{
    public interface IPokeApi
    {
        [Get("/pokemon")]
        Task<PokedexData> GetPokedexData(int limit = 20, int offset = 0);
    }
}