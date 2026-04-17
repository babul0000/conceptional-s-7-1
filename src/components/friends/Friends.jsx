"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Friends = ({item}) => {
    const { id, picture, name, days_since_contact, tags, status } = item;

    const router = useRouter()
    
    const getStatus = (status) => {
    if(status === "overdue") return "bg-blue-100 text-blue"
    if(status === "almost due") return "bg-pink-100 text-pink"
    return "bg-green-200 text-green"
    }
    return (
        <div
            onClick={()=> router.push(`/home/${id}`)}


            className="bg-white shadow-md rounded-lg p-6 border  border-gray-100 flex flex-col items-center text-center hover:border-1 hover:border-blue-200"
        >
            
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                    src={picture}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            
            <h2 className="mt-5 text-2xl font-semibold text-gray-900">
                {name}
            </h2>

            
            <p className="text-gray-500 text-lg mt-1 mb-4">
                {days_since_contact}d ago
            </p>

            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span key={index}
                        className="px-5 py-1.5 text-xs font-medium bg-[#CBFADB] text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        {tag.toUpperCase()}
                    </span>
                ))}
            </div>

            
            <div className={`py-1 px-2 text-sm font-semibold rounded-2xl 
                ${getStatus(status)}`}>
                {status === "overdue" && "overdue"}
                {status === "almost due" && "overdue"}
                {status === "on-track" && "on-track"}
                
            </div>

            
        </div>
    );
};

export default Friends;