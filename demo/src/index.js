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
    fetch('https://www.reddit.com/r/pics.json')
      .then(response => response.json())
      .then(json => this.setState({ data: json.data.children }));
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
            renderResults={results => (
              <div style={{ marginTop: '16px' }}>
                {results.map(({ data }, i) => (
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
                    <span>{data.title}</span>
                    <img src={data.thumbnail} alt={data.title}/>
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
