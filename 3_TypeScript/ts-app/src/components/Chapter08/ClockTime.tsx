import {FC} from "react";

const ClockTime : FC<{date : Date}> = ({date} : {date : Date}) : JSX.Element => {
    return (
        <h2>
            {date.toLocaleTimeString()}
        </h2>
    );
};

export default ClockTime;
