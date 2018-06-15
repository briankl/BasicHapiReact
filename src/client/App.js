import React, { Component } from 'react';
import SelectInput from '@hg/three-ui/src/components/HgInputs/SelectInput';
import './app.css';

const options = [
  { id: 0, text: 'Josh' },
  { id: 1, text: 'Nick' },
  { id: 2, text: 'Brian' },
  { id: 3, text: 'Maia' },
  { id: 4, text: 'Blake' },
  { id: 5, text: 'Shanna' }
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Hapi & React</h1>
        <SelectInput name="TeamMemberSelect" label="Select a Team Member" options={options} />
      </div>
    );
  }
}
