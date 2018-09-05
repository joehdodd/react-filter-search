import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import FilterResults from 'src/';

describe('FilterResults', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders without crashing', () => {
    render(
      <FilterResults
        value={''}
        data={[{ name: 'Joe' }]}
        renderResults={results => results.map((el, i) => <span key={i}>{el.name}</span>)}
      />,
      node,
      () => {
        expect(node);
      }
    );
  });
});
