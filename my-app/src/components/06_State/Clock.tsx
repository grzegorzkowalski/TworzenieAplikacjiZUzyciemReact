import {FC, JSX, useEffect, useState} from 'react';
import ClockTime from "./ClockTime.tsx";
import ClockDate from "./ClockDate.tsx";

const Clock: FC = () : JSX.Element => {
    const [datetime, setDatetime]  = useState<Date>(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDatetime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, [])

    return (
        <div>
            <ClockTime time={datetime} />
            <ClockDate time={datetime} />
        </div>
    );
};

export default Clock;
