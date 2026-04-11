import React from "react";

const Stats = () => {
    const statData = [
        { label: "Active Users", value: "500K+" },
        { label: "Downloads", value: "1M+" },
        { label: "Rating", value: "4.9/5" },
        { label: "Countries", value: "40+" },
    ];

    return (
        <div className="bg-purple-600 py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {statData.map((stat, index) => (
                    <div key={index} className="text-center text-white space-y-2">
                        <h2 className="text-4xl md:text-5xl font-extrabold italic">
                            {stat.value}
                        </h2>
                        <p className="text-purple-100 text-sm md:text-lg font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;