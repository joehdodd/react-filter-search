// in this demo we demonstrate that an attribute can be rendered but still not be use for filtering

import React, { Component } from 'react';
import { render } from 'react-dom';

import SearchResults from '../../src';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(
        json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '16px',
            padding: '16px'
          }}
        >
          <SearchResults
            value={value}
            data={data}
            omit={['address.city', 'address.street']}
            renderResults={results => (
              <div style={{ marginTop: '16px' }}>
                {results.map((data , i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: '#f7f7f7',
                      marginBottom: '8px',
                      borderRadius: '4px',
                      padding: '16px',
                      alignSelf: 'start',
                      width: '100%'
                    }}
                  >
                    <span>{data.name + " " + data.address.city}</span>
                  </div>
                ))}
              </div>
            )}
          />
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
