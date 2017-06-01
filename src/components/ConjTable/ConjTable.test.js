import React from 'react';
import ReactDOM from 'react-dom';

import ConjTable from './ConjTable';

describe('ConjTable component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConjTable />, div);
    });
});
