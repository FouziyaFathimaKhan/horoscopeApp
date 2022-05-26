import React from "react";

export const SelectTimeframe = ({
    onTimeframeSelected,
}) => {
  return (
      <>
      <h2>Please Select a timeframe......</h2>
            <div className="grid">
                {['yesterday','today','tomorrow'].map((timeframe) => (
                    <button className="timeframe" 
                    key={timeframe}
                        onClick={() => onTimeframeSelected(timeframe)}
                    >
                        {timeframe}
                    </button>
                ))}
                </div>
        </>
    );
};
    
