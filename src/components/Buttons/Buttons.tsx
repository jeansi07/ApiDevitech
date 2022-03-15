import React from "react";
import { useContextData } from "../../Context/dataContext/dataContext";


const Buttons = () => {
    const { setCount } = useContextData();

    return (
        <div className="justify-content-center">
            <div>
                <button className="btn btn-outline-primary" onClick={() => setCount(prevCount => prevCount - 1)}>Back</button>

                <button className="btn btn-outline-primary" onClick={() => setCount(prevCount => prevCount + 1)}>Next</button>
            </div>
        </div>

    )
};

export default Buttons;
