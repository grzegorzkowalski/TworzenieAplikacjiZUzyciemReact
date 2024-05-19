import { FC } from "react";

type UrlElement = {
    url: string,
    text: string
};

interface IUrlTab {
    menu: Array<UrlElement>
}

const Menu : FC<IUrlTab> = ({ menu }) : JSX.Element => {
    return (
        <ul>
            {
                menu.map((el) => {
                    return <li key={el.text}><a href={el.url}>{el.text}</a></li>
                })
            }
        </ul>
    );
};

export default Menu;
