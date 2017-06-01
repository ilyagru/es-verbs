import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('App component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('sets initial state correctly', () => {
        const div = document.createElement('div');
        const app = ReactDOM.render(<App />, div);

        expect(app.state.currentMood === 'Indicativo').toBeTruthy();
        expect(app.state.currentVerb === 'ir').toBeTruthy();
        expect.arrayContaining(app.state.moods);
        expect.arrayContaining(app.state.verbsData);
    });

    it('validates verb input correctly', () => {
        const div = document.createElement('div');
        const app = ReactDOM.render(<App />, div);

        expect(app.validateVerbInput('estar')).toEqual('estar');
        expect(app.validateVerbInput('oír')).toEqual('oír');
        expect(app.validateVerbInput('12poder')).toEqual('poder');
        expect(app.validateVerbInput('poner ')).toEqual('poner');
        expect(app.validateVerbInput('эстар ')).toEqual('');
        expect(app.validateVerbInput(' ')).toEqual('');
        expect(app.validateVerbInput('señalar_')).toEqual('señalar');
    });

    it('changes current mood correctly', () => {
        const div = document.createElement('div');
        const app = ReactDOM.render(<App />, div);;
        const currentMood = app.state.currentMood;

        app.onMoodChange('Subjuntivo');

        setTimeout(() => {
            expect(app.state.currentMood).toEqual('Subjuntivo');
        }, 2000);
    });
});
