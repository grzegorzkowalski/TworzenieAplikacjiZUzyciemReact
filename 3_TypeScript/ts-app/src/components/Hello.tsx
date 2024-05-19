const Hello = ({name, surname} : {name : string, surname : string}) => {
    return (
        <h1>
            {name} {surname}
        </h1>
    );
};

export default Hello;
