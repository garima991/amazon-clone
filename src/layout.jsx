import { useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import CategoryFilters from "./components/CategoryFilters";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-col max-h-[100dvh] min-h-[100dvh] overflow-auto">
        <Header />
        <CategoryFilters openSidebar={() => setSidebarOpen(true)} />
        {children}
      </div>

      <Sidebar
        open={isSidebarOpen}
        onClose={() => {
          setSidebarOpen(false);
        }}
      />

    </div>
  );
}
