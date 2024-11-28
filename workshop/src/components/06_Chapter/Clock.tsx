import {FC, useEffect, useState} from 'react';
import ClockTime from "./ClockTime.tsx";
import ClockDate from "./ClockDate.tsx";

const Clock : FC = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, []);


    return (
        <div>
            <ClockDate date={date.toLocaleDateString()} />
            <ClockTime  time={date.toLocaleTimeString()}/>
        </div>
    );
};

export default Clock;
