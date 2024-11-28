import {FC} from 'react';

const LikeBox : FC<{likes: number}> = ({likes}) => {
    return (
        <div>
            {likes}
            <button>Polub</button>
        </div>
    );
};

export default LikeBox;
