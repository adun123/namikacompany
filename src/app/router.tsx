import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts//MainLayout";
import { Home } from "../pages/Home";
import  About  from "../pages/About";
import { Services } from "../pages/Services";
import { Portfolio } from "../pages/Portofolio";
import  Contact  from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import ProductionHero from "../pages/Production";
import ServiceTextile from "../pages/ServiceTextile";
import ServiceGarment from "../pages/ServiceGarment";
import Clients from "../pages/Clients";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/textile", element: <ServiceTextile /> },
      { path: "/garment", element: <ServiceGarment /> },
      { path: "/production", element: <ProductionHero /> },
            { path: "/clients", element: <Clients /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
