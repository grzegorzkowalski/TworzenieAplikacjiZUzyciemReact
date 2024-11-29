import {FC, useEffect} from 'react';
import {RootState} from "../../store.ts";
import {start, stop, addToList, increment} from "./watcherSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";

const Watcher : FC = () => {
    const value = useAppSelector((state: RootState) => state.watcher.value);
    const isCounting = useAppSelector((state: RootState) => state.watcher.isCounting);
    const list = useAppSelector((state: RootState) => state.watcher.list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isCounting) {
            const id = setInterval(() => {
                dispatch(increment());
            }, 1000);

            return () => clearInterval(id);
        }
    }, [isCounting]);

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(start())}>start</button>
                    <button
                        disabled={!isCounting}
                        onClick={() => dispatch(stop())}
                    >
                        stop
                    </button>
                    <h1>{value}</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(addToList())}>zapisz</button>
                    <ul>
                        {
                            list.map((el, i) => <li key={i}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Watcher;
