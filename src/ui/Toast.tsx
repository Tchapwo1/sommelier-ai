import React from "react";

export default function Toast({ msg }: { msg: string }) {
    if (!msg) return null;
    return (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/70 text-white text-sm">
            {msg}
        </div>
    );
}
