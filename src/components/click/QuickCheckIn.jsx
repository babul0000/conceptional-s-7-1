"use client"
import { AppContext } from '@/context/context';
import React, { useContext } from 'react';
import { IoIosText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { MdOutlineWifiCalling } from 'react-icons/md';

const QuickCheckIn = ({app}) => {

    const {item, setItem} = useContext(AppContext)
    console.log(item);
    console.log(setItem);
    
    const handleClick = (type) => {
        alert(type)

        const dataClick = {
            ...app,
            dataInteraction: type,
            dataTime: new data().toLocalString(),
            id: Data.now(),
        }
setItem((prev) => [dataClick, ...prev])
    }
    
    return (
        <div className=''>

            <h1 className='text-xl font-bold mb-4'>Quick Check-In</h1>

            <div className='grid grid-cols-3 text-center gap-4'>
                <button
                onClick={() => handleClick("call")}
                className='bg-white p-4 rounded-lg shadow text-center'>
                    <span className='flex justify-center items-center font-bold mb-1'><MdOutlineWifiCalling /></span>
                    <span>Call</span>
                </button>
                
                <button
                onClick={() => handleClick("text")}
                className='bg-white p-4 rounded-lg shadow text-center'>
                    <span className='flex justify-center items-center font-bold mb-1'><IoIosText /></span>
                    <span>Text</span>
                </button>

                <button
                onClick={() => handleClick("video")}
                className='bg-white p-4 rounded-lg shadow text-center'>
                    <span className='flex justify-center items-center font-bold mb-1'><IoVideocam/></span>
                    <span>Video</span>
                </button>
                
            </div>
        </div>
    );
};

export default QuickCheckIn;