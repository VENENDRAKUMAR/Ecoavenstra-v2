import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';

const TimeCard = () => {
    // Get the current time
    let time = new Date().toLocaleTimeString();

    // State for time
    const [ctime, setTime] = useState(time);

    // Function to update time
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };

    // Update time every second
    useEffect(() => {
        const intervalId = setInterval(UpdateTime, 1000);
        return () => clearInterval(intervalId); // Cleanup to avoid memory leaks
    }, []);

    // Get the current day and date
    const currentDate = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDay = currentDate.toLocaleDateString(undefined, dayOptions);
    const currentFormattedDate = currentDate.toLocaleDateString(undefined, dateOptions);

    return (
        <div className="w-[280px] h-[150px] bg-gradient-to-r from-[#1f5bcc] to-[#46df74] rounded-[15px] shadow-[5px_10px_50px_rgba(0,0,0,0.7),-5px_0px_250px_rgba(0,0,0,0.7)] flex justify-center items-start flex-col cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-[5px_10px_50px_rgba(0,0,0,1),-5px_0px_250px_rgba(0,0,0,1)]">
            <p className="text-[40px] font-semibold ml-[15px] mt-0 flex items-center">
                {ctime}
            </p>
            <p className="text-[18px] font-medium ml-[15px] mt-0">
                {currentDay}, {currentFormattedDate}
            </p>
            <FaMoon className="text-[20px] absolute right-[15px] top-[15px] transition-all duration-300 ease-in-out hover:text-[23px]" />
        </div>
    );
};

export default TimeCard;
