import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login"
import Browse from "./Browse"
import PlayVideo from "./PlayVideo";
import Error from "./Error";

const Body = () => {

    const appRouter = createBrowserRouter([
        {path: "/",
        element:<Login/>,},
        {path: "/Browse",
            element: <Browse />,
        },
        {path: "/playvideo",
            element: <PlayVideo />,
        },
        {
            path: "/error",
            element: <Error />,
        },
        {
            path: "/browse/:movieId",
            element: <PlayVideo/>,
          },
        
    ]);
  
    return (
         <div><RouterProvider router={appRouter} /></div>
        
    )
    


}
export default Body;