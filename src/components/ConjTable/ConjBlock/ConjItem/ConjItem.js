import React from 'react';

import './ConjItem.css';

function ConjItem({ verbForm, pronoun }) {
    return (
        <div className='ConjItem'>
            <div className='pronoun'>{pronoun}</div>
            <div className='verbForm'>{verbForm}</div>
        </div>
    );
}

export default ConjItem;
