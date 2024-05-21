import {FC, JSX} from 'react';

interface IComputer {
    title: string,
    onBuy: Function
}
const ShopItem : FC<IComputer> = ({title, onBuy}) : JSX.Element => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => onBuy(title)}>Kup</button>
        </div>
    );
};

export default ShopItem;
