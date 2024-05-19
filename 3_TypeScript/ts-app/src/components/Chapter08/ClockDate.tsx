import {FC} from "react";

const ClockDate : FC<{date : Date}> = ({date} : {date : Date}) : JSX.Element => {
    return (
        <h2>
            {date.toLocaleDateString()}
        </h2>
    );
};

export default ClockDate;
