import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import SideBar from "./components/SideBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-[#EFEFEF]">
      <SideBar />
    </div>
  </StrictMode>
);
