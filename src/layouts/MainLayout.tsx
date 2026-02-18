import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import  Footer  from "../components/Footer";

export function MainLayout() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
