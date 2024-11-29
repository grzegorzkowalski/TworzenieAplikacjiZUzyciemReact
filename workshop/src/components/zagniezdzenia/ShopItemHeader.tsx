import React, {FC} from 'react';

type ItemHeader = {
    title: string,
    image: string
}

const ShopItemHeader : FC<ItemHeader> = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} />
        </header>
    );
};

export default ShopItemHeader;
