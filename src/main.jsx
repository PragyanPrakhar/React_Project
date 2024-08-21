import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import ProductMenu from './components/ProductMenu.jsx';
import Body from './components/Body.jsx';
import Preview from './components/Preview.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
export const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      children: [
          {
              path: "/",
              element: <Preview/>,
          },
          {
              path:"/products",
              element: <Body/>,
          },
          {
              path: "/about",
              element: <About />,
          },
          {
            path:"/product/:id",
            element:<ProductMenu/>
          },
          {
            path:"/cart",
            element:<Cart/>
          }
      ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)
