import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';

const app = new Hono()

app.use('/*', cors())

// routes.ts
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
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/routes', (c) => {
  return c.json(dynamicRoutes);
});

app.post('/routes', async (c) => {  
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
  return c.json(dynamicRoutes);
});

app.delete('/routes', async (c) => {  
  dynamicRoutes = dynamicRoutes.filter(route => route.id !== 'products');

  return c.json(dynamicRoutes);
});

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
