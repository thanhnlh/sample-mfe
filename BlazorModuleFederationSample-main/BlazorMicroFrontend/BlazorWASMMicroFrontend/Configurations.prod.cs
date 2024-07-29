namespace BlazorWASMMicroFrontend;

public partial class Configurations
{
#if !DEBUG
    public string HostBaseUrl { get; } = "http://localhost:8080/";
#endif
}