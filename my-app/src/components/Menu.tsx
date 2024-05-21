import {FC, JSX} from "react";

type ListElement = {
    name: string,
    link: string
}

const Menu : FC<{menu: Array<ListElement>}> = ({menu}) : JSX.Element => {
    return (
        <ul>
            {
                menu.map((el) => {
                    return <li key={el.name}><a href={el.link}>{el.name}</a></li>
                })
            }
        </ul>
    );
}

export {Menu};
export type { ListElement };