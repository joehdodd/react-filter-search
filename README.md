# React Filter Search 🔍

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This is a small, unobtrusive React component for filtering client-side application data.

[build-badge]: https://img.shields.io/travis/joehdodd/react-filter-search/master.png?style=flat-square
[build]: https://travis-ci.org/joehdodd/react-filter-search

[npm-badge]: https://img.shields.io/npm/v/react-filter-search.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-filter-search

[coveralls-badge]: https://img.shields.io/coveralls/joehdodd/react-filter-search/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/joehdodd/react-filter-search

## Installation

`npm i react-filter-search`

`yarn add react-filter-search`

## Usage

React Filter Search is simply a component that requires data in application state (needs to be an `array` of `object`s and an input value. In turn, you'll get back...

  * filtered data based on user input
  * all data in absence of any search input

This data flows back up in the form of `renderResults`, which is a render prop that returns one of the above. So you'll be responsible for setting up passing in data and an input value.

In this way, React Filter Search is unopinionated about how you store your data and how you handle user input in your application. 🎉



```javascript
//
/*-Other Imports-*/
//
import FilterResults from 'react-filter-search';

class App extends Component {
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
      .then(json => this.setState({ data: json }));
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
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}
```
The magic 🧙happens in `renderResults`, which returns an array of objects. Your data has either been filtered based on user input, or not.

Filtering logic will iterate over any level of nesting in your data structure. Which means a good suggestion for this is something like user data or todo items that aren't heavily nested at many levels.

To render your data, simply use .map() to render to the view--the data retains in the same structure. Return some inline JSX, or feed each element into a stateless React component that renders some UI.

## `props`

| name             | type                 | required?|
| ---------------- |----------------------| ---------|
| `value`          | `string`             | `true`   |    
| `data`           | `array` of `object`s | `true`   |
| `reunderResults` | `func`               | `true`   |


## Contributions

Read [`CONTRIBUTING.md`](https://github.com/joehdodd/react-filter-search/blob/master/CONTRIBUTING.md) and join the fun! 🎉
