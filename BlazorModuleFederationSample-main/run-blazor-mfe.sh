cd BlazorMicroFrontend

dotnet publish -c Release -o ../BlazorWasmPublished

cd ../BlazorWasmPublished/wwwroot/

npm install -g npx

npx http-server --cors