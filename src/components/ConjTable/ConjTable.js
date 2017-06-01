import React from 'react';

import './ConjTable.css';

import ConjBlock from './ConjBlock';

function ConjTable({ conjMoods, currentMood }) {
    let conjBlocks;

    if (conjMoods !== undefined) {
        conjBlocks = determineMood(conjMoods, currentMood);

        conjBlocks = Object.keys(conjBlocks).map((key, index) => {
            const tenseForms = conjBlocks[key];
            const tenseName = key;

            return (
                <ConjBlock tenseName={tenseName} tenseForms={tenseForms} key={index} />
            );
        });
    }

    return (
        <div className='ConjTable card'>
            {conjBlocks}
        </div>
    );
}

function determineMood(conjMoods, currentMood) {
    let mood;

    switch (currentMood) {
        case 'Indicativo':
            mood = conjMoods.indicativo;
            break;
        case 'Subjuntivo':
            mood = conjMoods.subjuntivo
            break;
        case 'Potencial':
            mood = conjMoods.potencial
            break;
        case 'Gerundio':
            mood = conjMoods.gerundio
            break;
        case 'Participio':
            mood = conjMoods.participio
            break;
        case 'Imperativo':
            mood = conjMoods.imperativo
            break;
        default:
            mood = conjMoods.indicativo;
    }
    return mood;
}

export default ConjTable;
