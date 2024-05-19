import {FC} from "react";

const LikeBox : FC<{likes: number}> = ({likes}) : JSX.Element => {
    return (
        <button>
            Liczba polubień: {likes}
        </button>
    );
};

export default LikeBox;
