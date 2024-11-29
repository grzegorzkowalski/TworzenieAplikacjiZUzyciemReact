import React, {FC} from 'react';
import ShopItemHeader from "./ShopItemHeader.tsx";
import ShopItemDescription from "./ShopItemDescription.tsx";
import ShopItemPricing from "./ShopItemPricing.tsx";

interface IShop {
    title: string,
    image: string,
    description: string,
    price: Number
}

interface IProps {
    item: IShop
}

const ShopItem : FC<IProps> = ({item: {title, image, description, price}}) => {
    return (
        <section>
             <ShopItemHeader title={title} image={image} />
             <ShopItemDescription description={description} />
             <ShopItemPricing price={price} />
        </section>
    );
};

export default ShopItem;
