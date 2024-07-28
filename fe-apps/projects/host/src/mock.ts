import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser';

let dynamicRoutes = [
    {
      id: 'users',
      type: 'module',
      remoteEntry: 'http://localhost:4101/remoteEntry.js?v=1', //<-- can add dynamic param version to clean cache      
      exposedModule: './routes',
      ngModuleName: 'routes',
      displayName: 'Users',
      routePath: 'users',            
    }
  ];
  
// Define request handlers and response resolvers
const handlers = [
 
    http.get('/api/routes', () => {
        return HttpResponse.json(dynamicRoutes);
    }),
    
    http.post('/api/routes', async (c) => {  
        if (!dynamicRoutes.some(route => route.id === 'products')) {
        dynamicRoutes.push( {
            id: 'products',
            type: 'module',
            remoteEntry: 'http://localhost:4102/remoteEntry.js?v=1', //<-- can dynamic param version to clean cache            
            exposedModule: './routes',
            ngModuleName: 'routes',
            displayName: 'Products',
            routePath: 'products',            
        });
        }
        return HttpResponse.json(dynamicRoutes);
    }),
    
    http.delete('/api/routes', async (c) => {  
        dynamicRoutes = dynamicRoutes.filter(route => route.id !== 'products');
    
        return HttpResponse.json(dynamicRoutes);
    })
];

// Set up the service worker
const worker = setupWorker(...handlers);

export { worker };
