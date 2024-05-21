import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <span>Strona główna</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span>O nas</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;