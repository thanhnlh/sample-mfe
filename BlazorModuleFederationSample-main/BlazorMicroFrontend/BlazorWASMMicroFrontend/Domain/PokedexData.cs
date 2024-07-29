using System.Text.Json.Serialization;

namespace BlazorWASMMicroFrontend.Domain;

public class PokedexData
{
    [JsonPropertyName("count")]
    public int Count { get; set; }
    [JsonPropertyName("next")]
    public string Next { get; set; }
    [JsonPropertyName("previous")]
    public object Previous { get; set; }
    [JsonPropertyName("results")]
    public IEnumerable<Result> Results { get; set; }
}

public class Result
{
    [JsonPropertyName("name")]
    public string Name { get; set; }
    [JsonPropertyName("url")]
    public string Url { get; set; }

    [JsonPropertyName("id")]
    public int Id
    {
        get
        {
            var uri = new Uri(Url);

            return int.Parse(uri.Segments.Last().TrimEnd('/'));
        }
    }
}