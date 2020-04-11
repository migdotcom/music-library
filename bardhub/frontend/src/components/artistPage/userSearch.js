import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/users";

export class userSearch extends Component {
  state = {
    name: ""
  };
    
/*     childFunction=(e)=>
    {
        e.preventDefault();
        this.props.functionCallFromParent("apogii");
    }

  static propTypes = {
    getUser: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const userSearchQuery = { name };
    this.props.getUser(userSearchQuery);
  };

  render()
  {
  return(
            <div>   
                <button onClick={this.childFunction.bind(this)}>Click</button>
            </div>
        );
  } */
 
  render()
  {  
        const { name } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Search for User</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ); 
  }
}

export default connect(null, { getUser })(userSearch);
