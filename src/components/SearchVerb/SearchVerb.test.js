import React from 'react';
import ReactDOM from 'react-dom';

import SearchVerb from './SearchVerb';

describe('SearchVerb component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchVerb />, div);
    });
});
