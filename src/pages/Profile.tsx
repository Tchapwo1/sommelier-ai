import React from "react";
import { useAppState } from "../state/AppState";

export default function Profile() {
    const { dark, setDark } = useAppState();

    return (
        <>
            <header className="px-6 pt-12 pb-4 border-b border-gray-200 dark:border-white/5">
                <h1 className="text-2xl font-bold">Profile</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Settings.</p>
            </header>

            <main className="flex-1 px-6 pb-24 pt-6">
                <div className="rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 flex items-center justify-between">
                    <div>
                        <div className="font-semibold">Dark mode</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Toggle theme</div>
                    </div>
                    <button
                        onClick={() => setDark(!dark)}
                        className="px-4 py-2 rounded-xl bg-primary text-white font-medium hover:bg-red-700 transition-colors"
                    >
                        {dark ? "On" : "Off"}
                    </button>
                </div>
            </main>
        </>
    );
}
