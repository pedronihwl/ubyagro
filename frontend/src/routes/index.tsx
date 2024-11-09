import HomePage from "@/app/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const NotFoundPage = () => (
  <div className="bg-[#EFEFEF] min-h-screen flex items-center justify-center">
    <h1>404 - Página Não Encontrada</h1>
  </div>
);

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/report",
      element: <HomePage />,
    },
    {
      path: "/carbon-credit",
      element: <HomePage />,
    },
    {
      path: "/recomendation",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    }
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Routes;
