namespace BlazorWASMMicroFrontend;

public partial class Configurations
{
#if DEBUG
    public string HostBaseUrl { get; } = "http://localhost:5289/";
#endif
}