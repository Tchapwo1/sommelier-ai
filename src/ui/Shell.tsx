import React from "react";

export default function Shell({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display min-h-screen flex justify-center">
            <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
                {children}
            </div>
        </div>
    );
}
