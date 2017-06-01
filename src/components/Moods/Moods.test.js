import React from 'react';
import ReactDOM from 'react-dom';

import Moods from './Moods';

describe('Moods component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Moods moods={[]} />, div);
    });
});
