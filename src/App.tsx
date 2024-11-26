import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RouterLink, SidebarData } from "./routers";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <BrowserRouter basename="/React_UI/">
        <Navbar />
        <div className="flex-row">
          <Sidebar menu={SidebarData} />
          <Routes>
            {RouterLink.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
