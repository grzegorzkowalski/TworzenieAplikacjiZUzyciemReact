import {FC, useContext, useEffect} from 'react';
import StoperContext from "./StoperContext.tsx";

const Stoper : FC = () => {
    const {state, dispatch} = useContext(StoperContext);

    const starTimer = () => {
        dispatch(state => {
            return {
                ...state,
                "isCounting": true
            }
        })
    };

    useEffect(() => {
        if (state.isCounting) {
            const id = setInterval(() => {
                dispatch(state => {
                    return {
                        ...state,
                        "value": state.value + 1
                    }
                })
            }, 1000);

            return () => clearInterval(id);
        }
    }, [state]);

    return (
        <div>
            <div>
                <div>
                    <button onClick={starTimer}>start</button>
                    <button disabled>stop</button>
                    <h1>{state.value}</h1>
                </div>
                <div>
                    <button>zapisz</button>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stoper;
