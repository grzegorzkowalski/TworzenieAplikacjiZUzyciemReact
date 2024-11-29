import React, {FC} from 'react';

const ShopItemDescription: FC<{description : string}> = ({description}) => {
    return (
        <article>
            <p>{description}</p>
        </article>
    );
};

export default ShopItemDescription;
