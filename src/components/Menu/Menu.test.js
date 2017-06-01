import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';

describe('Menu component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Menu moods={[]} />, div);
    });
});
