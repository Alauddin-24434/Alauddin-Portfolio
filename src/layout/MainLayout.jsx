import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import LandingPage from "../pages/Home/LandingPage";

export default function MainLayout() {
    return (
        <div  style={{ display: "flex" }}>
            <div style={{ width: "20%", position: "fixed", top: 0, bottom: 0, left: 0 }} className="hidden lg:block">
                <Sidebar />
            </div>
            <div style={{ width: "100%",   }} className="ml-0 lg:ml-[250px] bg-[#121212]" >
                <LandingPage />
            </div>
        </div>
    );
}
