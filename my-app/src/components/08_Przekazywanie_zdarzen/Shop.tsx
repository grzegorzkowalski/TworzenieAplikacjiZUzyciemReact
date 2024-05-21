import {FC, JSX, useState} from 'react';
import ShopItem from "./ShopItem.tsx";

const Shop : FC = () : JSX.Element => {
    const [list, setList] = useState<string[]>([]);
    const listHandler = (computer: string) => {
        setList(prev => [...prev, computer])
    }
    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={listHandler} />
            <ShopItem title="Dell X5500" onBuy={listHandler} />
            <ShopItem title="Asus NT6000" onBuy={listHandler} />
            <ul>
                {list.map((el : string, i: number) => <li key={i}>{el}</li>)}
            </ul>
        </div>
    );
};

export default Shop;
