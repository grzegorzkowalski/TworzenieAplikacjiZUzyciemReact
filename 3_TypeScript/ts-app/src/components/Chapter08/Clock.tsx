import {FC, useEffect, useState} from "react";
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";

const Clock : FC = () : JSX.Element => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <ClockDate date={date} />
            <ClockTime date={date} />
        </>
    );
};

export default Clock;
