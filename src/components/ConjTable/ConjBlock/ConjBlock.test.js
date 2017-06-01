import React from 'react';
import ReactDOM from 'react-dom';

import ConjBlock from './ConjBlock';

describe('ConjBlock component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConjBlock tenseForms={{}} />, div);
    });
});
