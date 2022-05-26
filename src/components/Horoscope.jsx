import React, { useState, useEffect } from 'react';
// import { getHoroscope } from '../services/api';

export const Horoscope = ({ sign, timeframe }) => {
    const [Horoscope, setHoroscope] = useState([null]);

    useEffect(() => {
        fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`)
            .then((response) => response.json())
            .then(data => setHoroscope(data.horoscope))
    }, [sign, timeframe]);

    return (
        <div>
            <h2>
                {timeframe}, your Horoscope for {sign} is...
            </h2>
            <p>{Horoscope}</p>
        </div>
    );
}