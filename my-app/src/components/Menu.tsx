import React, {JSX} from 'react';

const Menu : React.FC = () : JSX.Element => {
    return (
        <div>
            <ul>
                <li><a href="/">Strona główna</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/cennik">Cennik</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        </div>
    );
};

export default Menu;
