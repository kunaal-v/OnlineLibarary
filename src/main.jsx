import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Error from './Components/Error.jsx';
import BrowseBook from './Components/BrowseBook.jsx';
import Body from './Components/Body.jsx';
import AddBook from './Components/AddBook.jsx';
import BookDetails from './Components/BookDetails.jsx';

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"Home",
          element:<Body/>
        },
        {
          path:"browseBook",
          element:<BrowseBook/>
        },
        {
          path:"AddBook",
          element:<AddBook/>
        },
        {
          path:"/Book/:id",
          element:<BookDetails/>
        }
      ]
    },
    
  ]
);
createRoot(document.getElementById('root')).render(
 <RouterProvider router={appRouter}/>
)
