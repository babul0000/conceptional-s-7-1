import React from "react";
import Link from "next/link";
import AppCard from "./ui/AppCard";
// সরাসরি JSON ডাটা ইমপোর্ট করুন
import appsData from "../../../public/data.json"; 

const TrendingApps = ({ from }) => {
    // এখানে fetch করার দরকার নেই, appsData সরাসরি ব্যবহার করুন
    const apps = appsData;

    // হোমপেজ হলে ৯টি দেখাবে, নাহলে সব
    const displayApps = from === "homepage" ? apps.slice(0, 9) : apps;

    return (
        <div className="container mx-auto my-[60px] px-4">
            <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="font-bold text-4xl mb-4 text-gray-800">
                    {from === "homepage" ? "ট্রেন্ডিং অ্যাপস" : "সবগুলো অ্যাপস"}
                </h2>
                <p className="text-gray-500">
                    আপনার দৈনন্দিন কাজকে সহজ করতে আমাদের সেরা অ্যাপগুলো এক্সপ্লোর করুন।
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayApps.map((app, index) => (
                    <AppCard app={app} key={app.id || index} />
                ))}
            </div>

            {from === "homepage" && (
                <div className="text-center mt-12">
                    <Link href="/apps">
                        <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all shadow-md transform hover:scale-105">
                            সবগুলো দেখুন
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TrendingApps;