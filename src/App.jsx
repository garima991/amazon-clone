import { useState } from 'react';
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import CategoryFilters from "./components/Categories/CategoryFilters";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar open={isSidebarOpen} onClose={() => 
        setSidebarOpen(false)}
      />
      <Header />
      <CategoryFilters openSidebar = {() => setSidebarOpen(true)} />
      <Carousel />
    </div>
  )
}
