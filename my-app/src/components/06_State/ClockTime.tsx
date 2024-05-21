import {FC} from "react";

const ClockTime: FC<{time: Date}> = ({time}) => {
    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default ClockTime;
