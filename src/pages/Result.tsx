import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DISHES } from "../data/seed";
import { useAppState } from "../state/AppState";
import Toast from "../ui/Toast";
import { shareOrCopy } from "../lib/share";

export default function Result() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { toggleSaved, isSaved } = useAppState();
    const [toast, setToast] = useState("");

    const dish = useMemo(() => {
        const decoded = decodeURIComponent(id || "");
        return DISHES.find((d) => d.id === decoded) || null;
    }, [id]);

    if (!dish) {
        return (
            <>
                <header className="px-6 pt-12 pb-4 border-b border-gray-200 dark:border-white/5">
                    <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-primary">
                        <span className="material-icons-round">chevron_left</span> Back
                    </button>
                </header>
                <main className="flex-1 px-6 pb-24 pt-6">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-gray-300">
                        Pairing not found.
                    </div>
                </main>
            </>
        );
    }

    const p = dish.pairings[0];
    const saved = isSaved(dish.id);

    const onSave = () => {
        const nowSaved = toggleSaved(dish.id);
        setToast(nowSaved ? "Saved" : "Removed");
        setTimeout(() => setToast(""), 1200);
    };

    const onShare = async () => {
        const res = await shareOrCopy({
            title: "Wine Pairing",
            text: `${dish.name} → ${p.category} / ${p.subdivision}`
        });
        setToast(res === "shared" ? "Shared" : res === "copied" ? "Link copied" : "Couldn't share");
        setTimeout(() => setToast(""), 1200);
    };

    return (
        <>
            <header className="absolute top-0 w-full z-10 p-6 flex justify-between items-center bg-gradient-to-b from-background-dark/80 to-transparent">
                <button
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary/20 transition-colors"
                    aria-label="Back"
                >
                    <span className="material-icons-round text-xl">arrow_back</span>
                </button>

                <div className="flex gap-3">
                    <button
                        onClick={onSave}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary/20 transition-colors"
                        aria-label="Save"
                    >
                        <span className="material-icons-round text-xl">
                            {saved ? "bookmark" : "bookmark_border"}
                        </span>
                    </button>

                    <button
                        onClick={onShare}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary/20 transition-colors"
                        aria-label="Share"
                    >
                        <span className="material-icons-round text-xl">ios_share</span>
                    </button>
                </div>
            </header>

            <div className="relative w-full h-[45vh]">
                <div className="absolute inset-0 w-full h-full">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_20%_10%,rgba(212,17,50,0.35),transparent_55%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/60 to-background-dark" />
                </div>

                <div className="absolute bottom-0 w-full px-6 pb-8 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-1 rounded-full mb-3">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Perfect Match</span>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-1 leading-tight">{dish.name}</h1>
                    <p className="text-gray-300 text-sm mb-6">{dish.cuisine} • {dish.flags.length ? dish.flags.join(" • ") : "Classic"}</p>

                    <div className="w-full p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Category</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Subdivision</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-round text-primary">wine_bar</span>
                                <span className="text-xl font-medium text-white">{p.category}</span>
                            </div>
                            <div className="h-px flex-grow mx-4 bg-gradient-to-r from-white/20 to-transparent" />
                            <span className="text-lg font-bold text-primary">{p.subdivision}</span>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-1 px-6 space-y-8 relative z-10 -mt-2 pb-28">
                <section>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons-round text-primary text-sm">psychology</span>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Why it works</h3>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">{p.why}</p>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">The Ideal Bottle</h3>
                        <button
                            onClick={() => navigate("/pair")}
                            className="text-xs text-primary font-medium"
                        >
                            Pair my Wine
                        </button>
                    </div>

                    <div className="relative bg-gradient-to-br from-[#2a1418] to-[#1a0c0e] border border-primary/20 rounded-xl p-5 overflow-hidden shadow-lg">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-24 h-32 bg-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <span className="material-icons-round text-primary text-4xl">wine_bar</span>
                            </div>

                            <div className="flex flex-col justify-center flex-grow">
                                <span className="text-xs text-primary font-semibold mb-1">Ideal bottle</span>
                                <h4 className="text-xl font-bold text-white leading-tight mb-2">{p.idealBottle}</h4>
                                <div className="text-sm text-gray-400">{p.subdivision}</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Two Equivalents</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {p.equivalents.map((e) => (
                            <div key={e} className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-primary/30 transition-colors">
                                <div className="h-24 w-full bg-white/5 rounded mb-3 flex items-center justify-center overflow-hidden">
                                    <span className="material-icons-round text-gray-300 text-3xl">local_bar</span>
                                </div>
                                <h4 className="text-white font-medium text-sm mb-1">{e}</h4>
                                <p className="text-xs text-gray-500">Similar style match</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Toast msg={toast} />
        </>
    );
}
