import React, {JSX} from 'react';
import Link from 'next/link';

const About: React.FC = () : JSX.Element => {
    return (
        <div>
            <h1>O nas</h1>
            <p>To jest strona "O nas".</p>
            <Link href="/">
                <span>Przejdź do strony głównej</span>
            </Link>
        </div>
    );
};

export default About;