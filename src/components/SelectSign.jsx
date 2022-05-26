import React, { useEffect, useState } from 'react';
import {getSigns} from '../services/api';


export const SelectSign = ({ onSignSelected }) => {
    const [signs, setSigns] = useState([null]);
    
    useEffect(() => {
        getSigns().then(setSigns)
      }, []);

    return (
        <>
    <h2>Please Select a Sign</h2>
            <div className="grid">
                {signs.map((sign) => (
                    <button className="sign" key={sign}
                        onClick={() => onSignSelected(sign)}
                    >
                        {sign}
                    </button>
                ))}
                </div>
        </>
    );
}
