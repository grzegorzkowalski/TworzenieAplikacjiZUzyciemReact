import {FC, ReactNode} from 'react';

type MenuLink = {
    url: "/",
    text: "Strona główna"
}

type MenuProps = {
    menu: MenuLink[]
}

const Menu : FC<MenuProps> = ({menu}) => {
    return (
        <ul>
            {
                menu.map((el: MenuLink) : ReactNode => {
                    return (
                        <li key={el.url}>
                            <a href={el.url}>{el.text}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Menu;
