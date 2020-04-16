// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// //import { getUser } from "../../actions/users"; we merely pass the searchedUser through to the artistpage

// export class albumSearch extends Component {
//   state = {
//     name: "",
//   };

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   childFunction = (e) => {
//     console.log(e);
//     this.props.messageToParent(e.name);
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     const { name } = this.state;
//     this.state.userSearchQuery = { name };
//     this.childFunction(this.state.userSearchQuery);
//   };

//   /*
//   static propTypes = {
//     getUser: PropTypes.func.isRequired
//   };

//   render()
//   {
//   return(
//             <div>
//                 <button onClick={this.childFunction.bind(this)}>Click</button>
//             </div>
//         );
//   } */

//   render() {
//     const { name } = this.state;
//     return (
//       <div className="card card-body mt-4 mb-4">
//         <h2>Search for User</h2>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               className="form-control"
//               type="text"
//               name="name"
//               onChange={this.onChange}
//               value={name}
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// //export default connect(null, { getUser })(userSearch); if we were to do the retrieval in here
// export default albumSearch;
