import {FC} from 'react';

const ShopItemPricing : FC<{price : number}> = ({price}) => {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    );
};

export default ShopItemPricing;
