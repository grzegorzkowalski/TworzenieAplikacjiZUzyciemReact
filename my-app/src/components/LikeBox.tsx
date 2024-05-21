import React, {JSX, useState} from 'react';

const LikeBox : React.FC<{num: number}> = ({num}) : JSX.Element => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <p>{num} likes</p>
            <p>{counter} likes</p>
            <button onClick={() => setCounter(prev => prev + 1)}>Polub</button>
        </div>
    );
};

export default LikeBox;
