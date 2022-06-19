import React, { Component } from 'react';

export default class FilterContact extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={onChange} value={filter} />
      </>
    );
  }
}
