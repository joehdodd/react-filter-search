import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import FilterResults from 'src/';
// import { data } from './mock';
import 'whatwg-fetch';

describe('FilterResults', () => {
  let node;
  let data;
  beforeEach(async () => {
    node = document.createElement('div');
    data = await fetch('https://www.reddit.com/r/pics.json')
      .then(response => response.json())
      .then(json => json.data.children);
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders a filtered value without crashing', () => {
    render(
      <FilterResults
        value={'pics'}
        data={data}
        renderResults={results =>
          results.map(({ data }, i) => <span key={i}>{data.ups}</span>)
        }
      />,
      node,
      () => {
        expect(node);
      }
    );
  });
}),
  describe('AllResults', () => {
    let node;
    let data;
    beforeEach(async () => {
      node = document.createElement('div');
      data = await fetch('https://www.reddit.com/r/pics.json')
        .then(response => response.json())
        .then(json => json.data.children);
    });

    afterEach(() => {
      unmountComponentAtNode(node);
    });

    it('renders all values without crashing', () => {
      render(
        <FilterResults
          value={''}
          data={data}
          renderResults={results =>
            results.map(({ data }, i) => <span key={i}>{data.ups}</span>)
          }
        />,
        node,
        () => {
          expect(node);
        }
      );
    });
  });
