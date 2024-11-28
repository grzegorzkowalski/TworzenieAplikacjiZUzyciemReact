import React, {FC} from 'react';

interface ISecret {
    password: string,
    correctPassword: string,
    secret: string
}

const SecretStuff: FC<ISecret> = ({password, correctPassword, secret}) : JSX.Element | null => {
    if (password === correctPassword) {
        return (
            <div>
                {secret}
            </div>
        );
    } else {
        return null;
    }
};

export default SecretStuff;
