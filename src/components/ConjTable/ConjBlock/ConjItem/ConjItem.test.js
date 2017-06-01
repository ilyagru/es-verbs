import React from 'react';
import ReactDOM from 'react-dom';

import ConjItem from './ConjItem';

describe('ConjItem component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConjItem />, div);
    });
});
