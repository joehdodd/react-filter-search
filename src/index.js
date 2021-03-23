import { Component } from 'react';
import PropTypes from 'prop-types';
import { filter } from './filter';

export default class FilterResults extends Component {
  render() {
    const { value, data, pick } = this.props;
    return this.props.renderResults(filter(value, data, pick));
  }
}

FilterResults.propTypes = {
  value: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderResults: PropTypes.func.isRequired,
  pick: PropTypes.arrayOf(PropTypes.string)
};
