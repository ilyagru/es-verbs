import React from 'react';

import './SearchVerb.css';

function SearchVerb({ currentVerb, onSearchInputChange }) {
    return (
        <div className='SearchVerb'>
            <input
                autoFocus
                type='text'
                placeholder='Type spanish verb...'
                value={currentVerb}
                onChange={e => onSearchInputChange(e.target.value)}/>
        </div>
    );
}

export default SearchVerb;
