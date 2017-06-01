import React from 'react';

import './Moods.css';

function Moods({ moods, onMoodChange }) {
    const moodsOptions = moods.map((mood, index) => {
        return <option key={index} value={mood}>{mood}</option>;
    });

    return (
        <div className='Moods'>
            <select onChange={e => onMoodChange(e.target.value)}>
                {moodsOptions}
            </select>
        </div>
    );
}

export default Moods;
