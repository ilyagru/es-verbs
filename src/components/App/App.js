import React, { Component } from 'react';

import './App.css';

import Menu from '../Menu';
import ConjTable from '../ConjTable';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentMood: 'Indicativo',
            currentVerb: 'ir',
            verbsData: [],
            moods: ['Indicativo', 'Subjuntivo', 'Potencial', 'Imperativo', 'Gerundio', 'Participio']
        };

        this.renderTable = this.renderTable.bind(this);
        this.getTranslation = this.getTranslation.bind(this);
        this.findInVerbs = this.findInVerbs.bind(this);
        this.onMoodChange = this.onMoodChange.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.validateVerbInput = this.validateVerbInput.bind(this);
    }

    componentDidMount() {
        fetch('/data/verbs.json')
            .then(response => response.json())
            .then(data => this.setState({ verbsData: data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='App'>
                <Menu
                    moods={this.state.moods}
                    currentVerb={this.state.currentVerb}
                    translation={this.getTranslation()}
                    onMoodChange={this.onMoodChange}
                    onSearchInputChange={this.onSearchInputChange} />
                {this.renderTable()
                    || <div className='card noVerbBlock'>Type spanish verb in base form and select the mood.</div>}
            </div>
        );
    }

    renderTable() {
        const conjMoods = this.findInVerbs('conjMoods');

        if (conjMoods !== undefined) {
            return <ConjTable currentMood={this.state.currentMood} conjMoods={conjMoods} />;
        }
    }

    getTranslation() {
        return this.findInVerbs('translation');
    }

    findInVerbs(property) {
        const allVerbs = this.state.verbsData;

        for (let i = 0; i < allVerbs.length; i++) {
            if (allVerbs[i].verb === this.state.currentVerb
                || allVerbs[i].verb.replace(/í/, 'i') === this.state.currentVerb) {
                    return allVerbs[i][property];
            }
        }
    }

    onMoodChange(newMood) {
        this.setState({ currentMood: newMood });
    }

    onSearchInputChange(verb) {
        this.setState({ currentVerb: this.validateVerbInput(verb) });
    }

    validateVerbInput(value) {
        const validationExp = /[A-Za-zíÍüÜóÓñÑ]+/;
        const matchedValue = value.trim().toLowerCase().match(validationExp);

        return value !== '' && matchedValue !== null ? matchedValue[0] : '';
    }
}

export default App;
