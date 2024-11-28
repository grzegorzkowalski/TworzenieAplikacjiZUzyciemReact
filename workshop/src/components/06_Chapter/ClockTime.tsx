import {FC} from "react";

const ClockTime : FC<{time: string}> = ({time}) => {

    return <h2>{time}</h2>
};

export default ClockTime;
