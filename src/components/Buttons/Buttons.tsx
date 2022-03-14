import React, { useEffect, useState } from "react";
import { useContextData } from "../../Context/dataContext/dataContext";


const Buttons = () => {
    const { setCount } = useContextData();
    

    


    return (
        <div>
            <button className="btn btn-outline-primary" onClick={() => setCount(prevCount => prevCount - 1)}>Back</button>
            
            <button className="btn btn-outline-primary" onClick={() => setCount(prevCount => prevCount + 1)}>Next</button>
        </div>

    )
};

export default Buttons;
