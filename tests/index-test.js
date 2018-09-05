import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import FilterResults from 'src/';
import { data } from './mock';

describe('FilterResults', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders a filtered value without crashing', () => {
    render(
      <FilterResults
        value={'ja'}
        data={data}
        renderResults={results =>
          results.map((el, i) => <span key={i}>{el.company.name}</span>)
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

    beforeEach(() => {
      node = document.createElement('div');
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
            results.map((el, i) => <span key={i}>{el.company.name}</span>)
          }
        />,
        node,
        () => {
          expect(node);
        }
      );
    });
  });
