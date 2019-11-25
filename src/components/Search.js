import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';


/* *
 *  I wouldn't use plain CSS for this component
 *  My choice would be CSSModules to avoid potential CSS class names collisions
 *  But it's part of Requirements to use plain CSS
 */
import './Search.css';

/* *
 * I don't think we need .spec file for this components, they don't have any logic
 * We could have snapshot tests just in case but they really simple right now
 */

/* *
 * I'm going to leave it as class component but will extend PureComponent
 * If this is going to be a form in future it may benefit from being a class component
 */
class Search extends React.PureComponent {

  constructor () {
    super();
    this.state = {
      query: ''
    };
  }

  render() {
    const { query } = this.state;
    return (
      <div className="tq-search-form">
        <Input
          className="tq-search-form-input"
          placeholder="What are you looking for?"
          value={query}
          onChange={this.handleInputChange}
          onKeyPress={this.handleInputKeyPress}
        />
        <Button
          disabled={!query}
          onClick={this.handleSearchClick}
        >
          Search
        </Button>
      </div>
    );
  }

  handleInputChange = (e) => {
    if (e && e.currentTarget) {
      this.setState({ query: e.currentTarget.value });
    }
  }

  handleInputKeyPress = (e) => {
    if (e && e.key === 'Enter' && this.props.onSearch && this.state.query) {
      this.props.onSearch(this.state.query);
    }
  }

  handleSearchClick = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.query);
    }
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
