import React from "react";
import Link from "next/link";
import AppCard from "./ui/AppCard";



// Fetch function
const getApps = async () => {
    // Note: Localhost fetch Server Component-e thik thakleও production-e absolute URL lage
    const res = await fetch(" http://localhost:3000/data.json", {
        cache: 'no-store' // Fresh data pawar jonno
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
};

const TrendingApps = async ({ from }) => {
    const apps = await getApps();

    // Homepage hole 9-ta dekhabe, noile sob dekhabe
    const displayApps = from === "homepage" ? apps.slice(0, 9) : apps;

    return (
        <div className="container mx-auto my-[60px] px-4">
            {/* Section header */}
            <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="font-bold text-4xl mb-4">
                    {from === "homepage" ? "Trending Apps" : "All Available Apps"}
                </h2>
                <p className="text-gray-500">
                    Explore our most popular and productive apps designed to simplify 
                    your digital lifestyle and boost your efficiency.
                </p>
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayApps.map((app, index) => (
                    <AppCard app={app} key={app.id || index} />
                ))}
            </div>

            {/* View All Button - Shudhu Homepage-e dekhabe */}
            {from === "homepage" && (
                <div className="text-center mt-12">
                    <Link href="/apps">
                        <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all shadow-md">
                            View All Apps
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TrendingApps;