import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DISHES } from "../data/seed";
import type { DietFlag, Dish } from "../data/types";
import { DietChips } from "../ui/Chips";
import { matchesDishQuery } from "../data/helpers";

const CUISINE_IMAGES: Record<string, string> = {
    French: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZXqxq1SMCLAJF75yj1s9UzOS-_mTXmvGwoY-RM9hxDkrQABsP34edM_FfKMd35ZqXpE7YYTbxw4P6hnrN7rf5ZNQTrGKZOexC_wMxM7AgTAmtPhQvTUEycZRyPmhkyoJIXehtTP9W5CRuDYb2HBRC9rXReKDA3aU92ShTxFKjGHFUaogSFiL8Ab7g-w9bqPCaVvBJFmO5Rb1-K385maTOm_7UUjmKEMte4KLv5dKiwNWVsM4X8l8Axm0ep4Mmfrym5VBuM__oi8",
    Italian: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhXOZRMwyV6tT1i6CV_j93VSR9-BZgjYCt_wCmI_IcSaoGd5nh3y5xvQz_Ch0MaD5BnH2YLHLTBQMs867CiMqiAKx1-GzoYQCmPXsG2LVQQSd_JqfVJ2k37Pj96jhDImbKwiEM5MZBLgXWrnodc0tQkVw_y_t8cJhgjwugNzjabDGzYxlRYIa7kbkZEibco-fLRZ5VVk83guXV4b5S3QVEQqI-PJfydadPBZa2r95qSuzQ64cDLn_w2LpFEX5tnf7PxzZAvbVu_e4",
    Spanish: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0v2gHJI69qTm-JU_KcXWe5wVGxV4Rk2r_1QlcX1cduTlEAZiaMICb4238SEAkq4g-YG_5X_g_UbBQjyxvdAUojLWvjlrLoo8hxDa7qeAJdaH5aFCyosMRpbIc7xp8upSs55U5tap1fSSLZZ-V12rJ2RYn7fQUrsxOd9vnjpOjV7mWsCavlx9ajw1pOSF5JI09WruqdITumMWZCL8BIuYxV9EvoNdNHKgojyCRDielSkv7L8lJ08gylb5_FsgR2WXJp2dc0A5iINk",
    Portuguese: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5VcS5L1BOigEfXsRW7PM40EQPa1iaN9LgldKvebfrJdD7QGS5dveVQw0abe9O5bnhKJQ0kHQ0TG2A62IJvC4MUjSHvb8w388j7MVjoLpWO8P91QTAURRM7IPsi6phwveh6WQHQODw4SdF19F6YdZfIYAAjWVgUB6zQGtcY_ldYifzCpbnqOOfliZKNBa4Hoze_65ULRvm4tw7dHvcLWitadih1Z_H4w-4OXXFLpwFkx8KYGhJSYkUjePdXbVbNfGACeg3BwVLMTQ",
    English: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Dpri4hmDpNYYHQa0FuKe91pOMDiKnlb1F3qVuhaHXx5TTGLAAOg2esXLamIzAvCjH5BosZwpW_MPJG9HtlD9x_arja7-x0E4zN0MSGkNWSk54yYt549j4CnYpDpde1hVM6VLtfRX8IURCTCgYbRiIIniczM1-tR2Jp6l_qvi33pkaeEE5fLHMMnlerKyHr0a6H5EWOAqHWPV3TMf1smiKBvpGd0h85l0zBZ3fcGtNTiTgnq7DD46xNlFRPlIC3JLHdeMO_7rfu8"
};

function CuisineCard({
    title, subtitle, imageUrl, big, badge, onClick
}: { title: string; subtitle?: string; imageUrl: string; big?: boolean; badge?: string; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`${big ? "col-span-2 h-48" : "h-40"} relative rounded-xl overflow-hidden group w-full text-left`}
            aria-label={`Open ${title}`}
        >
            <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
                {badge && <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{badge}</span>}
                <h3 className={`${big ? "text-2xl" : "text-lg"} font-normal text-white tracking-wide`}>{title}</h3>
                {subtitle && <p className="text-gray-300 text-sm font-light mt-1">{subtitle}</p>}
            </div>
        </button>
    );
}

export default function Home() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [active, setActive] = useState<Set<DietFlag>>(new Set());

    const toggleFlag = (k: DietFlag) => {
        setActive((prev) => {
            const next = new Set(prev);
            next.has(k) ? next.delete(k) : next.add(k);
            return next;
        });
    };

    const matches = useMemo(() => {
        const arr = DISHES.filter((d) => {
            for (const f of active) if (!d.flags.includes(f)) return false;
            return matchesDishQuery(d, q);
        });
        return arr.slice(0, 6);
    }, [q, active]);

    const goResult = (dish: Dish) => navigate(`/result/${encodeURIComponent(dish.id)}`);

    return (
        <>
            <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm sticky top-0 z-20">
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-1">Sommelier AI</span>
                    <h1 className="text-2xl font-light tracking-wide text-gray-900 dark:text-white">
                        Good evening, <span className="font-medium">Alex</span>
                    </h1>
                </div>
                <button
                    onClick={() => navigate("/profile")}
                    className="relative"
                    aria-label="Open profile"
                >
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-2 border-primary/20">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSVWkQLwCz-if8Sb7IOPTXbtGboIeF0bqpvIvJTJ6piECs4BmAKhEWml-g71ZvYg76sjx-hk9r-hEOE5_4uaV80CESms-IeBZMQSP5-c-MfmOqsBmxl-7ss3VKubCa-gAut_jl6zGzqWPD35Ci342ah81UDpbI467lJkzUb1a7UDylw2RCOsxv_-msDnnUIvwwKWKly9INEJrTyeeZtID_wZcrx9vgGYiRhazm5gPkKQdljGSIXbewxTV9Og2QFlXEp9H4eg4318E"
                            alt="User profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-background-dark" />
                </button>
            </header>

            <main className="flex-1 overflow-y-auto pb-24 px-6 no-scrollbar">
                <div className="mt-2 mb-6">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-icons-round text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input
                            className="block w-full pl-11 pr-4 py-4 rounded-xl bg-white dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition-all"
                            placeholder="Type: carbonara / paella / fish and chips"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <DietChips active={active} onToggle={toggleFlag} />
                </div>

                <div className="mb-6 flex justify-between items-end">
                    <h2 className="text-xl font-light tracking-wide text-gray-900 dark:text-white">
                        Explore by <span className="font-medium text-primary">Region</span>
                    </h2>
                    <button
                        className="text-xs font-medium text-gray-500 hover:text-primary transition-colors uppercase tracking-wider"
                        onClick={() => navigate("/learn")}
                    >
                        Learn
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <CuisineCard
                        title="French Cuisine"
                        subtitle="Coq au vin, Boeuf bourguignon..."
                        imageUrl={CUISINE_IMAGES.French}
                        big
                        badge="Most Popular"
                        onClick={() => navigate("/cuisine/French")}
                    />
                    <CuisineCard title="Italian" imageUrl={CUISINE_IMAGES.Italian} onClick={() => navigate("/cuisine/Italian")} />
                    <CuisineCard title="Spanish" imageUrl={CUISINE_IMAGES.Spanish} onClick={() => navigate("/cuisine/Spanish")} />
                    <CuisineCard title="Portuguese" imageUrl={CUISINE_IMAGES.Portuguese} onClick={() => navigate("/cuisine/Portuguese")} />
                    <CuisineCard title="English" imageUrl={CUISINE_IMAGES.English} onClick={() => navigate("/cuisine/English")} />
                </div>

                {q.trim() && (
                    <div className="mb-8">
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Matches</h2>
                            <span className="text-xs text-primary font-medium">{matches.length} shown</span>
                        </div>

                        <div className="space-y-3">
                            {matches.map((d) => (
                                <button
                                    key={d.id}
                                    onClick={() => goResult(d)}
                                    className="w-full text-left rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex justify-between items-start gap-3">
                                        <div>
                                            <div className="font-semibold">{d.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                {d.cuisine} • {d.pairings[0].category} • {d.pairings[0].subdivision}
                                            </div>
                                        </div>
                                        <span className="material-icons-round text-primary">arrow_forward</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-6 mb-8">
                    <div className="flex items-center justify-between relative z-10">
                        <div>
                            <h3 className="text-lg font-medium text-white mb-1">Have the bottle already?</h3>
                            <p className="text-sm text-gray-400 font-light mb-4">Find the perfect dish to match your wine.</p>
                            <button
                                onClick={() => navigate("/pair")}
                                className="inline-flex items-center space-x-2 bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-lg transition-colors text-sm font-medium shadow-lg shadow-primary/30"
                            >
                                <span className="material-icons-round text-sm">wine_bar</span>
                                <span>Pair my Wine</span>
                            </button>
                        </div>

                        <div className="w-20 h-32 relative">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiIPxTVTJweTyAg1ZViu7EPhcsyF2wX-Mw8-AIiNrgZkj2rp3XH2KsG04kaApRui_j45kakIys6C2y3-OfLAAyPjPvxvDpJG_Wt4dRYOjC-ka6l3Blr5GM2FJqS1x4d1tYddTrEr8y8OOkHbk5gkw8lZ8jrqh90S-tHvfWLETohe356L8JDl-1W5vLxGbIAKnpzyKzQTon5XJxTehZN9YbMvHGrMMXFBI8uAncEcUpbTtVO15pzeyJesOUw8EZZK9FPSkg1Ur421c"
                                alt="Red wine bottle"
                                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl rotate-12"
                            />
                        </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                </div>
            </main>
        </>
    );
}
