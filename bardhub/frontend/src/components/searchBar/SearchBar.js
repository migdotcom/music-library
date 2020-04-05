import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SearchField from 'react-search-field';


import propTypes from "prop-types";
import { getSearch } from "../../actions/searches";

export class SearchBar extends Component {
  static propTypes = {
    searches: propTypes.array,
    getSearch: propTypes.func.isRequired,
  };

constructor(props) {
	super(props)
	this.state =
		{searches: ["blank"]     } }

  componentDidMount() {
	      this.props.getSearch();
  }

  render() {
    return (
      <Fragment>
          {this.props.searches.map(search => (
                  <SearchField
                      placeholder='Search item'
                      onEnter={onEnter}
                    />
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  searches: state.searches.searches
});

export default connect(mapStateToProps, { getSearch })(SearchBar);
