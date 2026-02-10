import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function BottomNav() {
    const navigate = useNavigate();
    const navClass = ({ isActive }: { isActive: boolean }) =>
        `flex flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-gray-400 hover:text-primary"
        } transition-colors`;

    return (
        <nav className="fixed bottom-0 w-full max-w-md bg-white/90 dark:bg-[#1a0c0f]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 pb-6 pt-3 px-6 z-30">
            <div className="flex justify-between items-center">
                <NavLink to="/" className={navClass}>
                    <span className="material-icons-round text-2xl">home</span>
                    <span className="text-[10px] font-medium tracking-wider">Home</span>
                </NavLink>

                <NavLink to="/saved" className={navClass}>
                    <span className="material-icons-round text-2xl">favorite_border</span>
                    <span className="text-[10px] font-medium tracking-wider">Saved</span>
                </NavLink>

                <div className="relative -top-6">
                    <button
                        onClick={() => navigate("/pair")}
                        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 hover:scale-105 transition-transform"
                        aria-label="Pair my wine"
                    >
                        <span className="material-icons-round text-2xl">qr_code_scanner</span>
                    </button>
                </div>

                <NavLink to="/cellar" className={navClass}>
                    <span className="material-icons-round text-2xl">inventory_2</span>
                    <span className="text-[10px] font-medium tracking-wider">Cellar</span>
                </NavLink>

                <NavLink to="/profile" className={navClass}>
                    <span className="material-icons-round text-2xl">person_outline</span>
                    <span className="text-[10px] font-medium tracking-wider">Profile</span>
                </NavLink>
            </div>
        </nav>
    );
}
