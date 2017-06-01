import React from 'react';

import './ConjBlock.css';

import ConjItem from './ConjItem';

function ConjBlock({ tenseName, tenseForms }) {
    const tenses = Object.keys(tenseForms).map((key, index) => {
        const verbForm = tenseForms[key];
        const pronoun = key;

        return <ConjItem verbForm={verbForm} pronoun={pronoun} key={index} />
    });

    return (
        <div className='ConjBlock'>
            <h3>{tenseName}</h3>
            {tenses}
        </div>
    );
}

export default ConjBlock;
