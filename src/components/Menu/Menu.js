import React from 'react';

import './Menu.css';

import SearchVerb from '../SearchVerb';
import Moods from '../Moods';

function Menu(props) {
    return (
        <div className='Menu'>
            <form className='card' onSubmit={(e) => e.preventDefault()}>
                <SearchVerb
                    currentVerb={props.currentVerb}
                    onSearchInputChange={verb => props.onSearchInputChange(verb)} />
                <Moods
                    moods={props.moods}
                    onMoodChange={mood => props.onMoodChange(mood)} />
            </form>
            <div className='verbInfo'>
                <p>{props.translation}</p>
            </div>
        </div>
    );
}

export default Menu;
