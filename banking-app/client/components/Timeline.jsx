import React, { useState } from 'react';

const Timeline = () => {
  const [selectedRange, setSelectedRange] = useState('1d'); 

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
    console.log('Selected range:', event.target.value);
  };

  return (
    <div className="timeline">
      <h2>Stock Chart Timeline</h2>
      <div className="timeline-options">
        <label>
          <input
            type="radio"
            value="1d"
            checked={selectedRange === '1d'}
            onChange={handleRangeChange}
          />
          1 Day
        </label>
        <label>
          <input
            type="radio"
            value="1w"
            checked={selectedRange === '1w'}
            onChange={handleRangeChange}
          />
          1 Week
        </label>
        <label>
          <input
            type="radio"
            value="1m"
            checked={selectedRange === '1m'}
            onChange={handleRangeChange}
          />
          1 Month
        </label>
        <label>
          <input
            type="radio"
            value="1y"
            checked={selectedRange === '1y'}
            onChange={handleRangeChange}
          />
          1 Year
        </label>
      </div>
      {/* chart component */}
      <div className="chart-container">
        {/* chart component */}
        <p>Chart for {selectedRange} will be shown here.</p>
      </div>
    </div>
  );
};

export default Timeline;
