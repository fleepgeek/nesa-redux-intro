import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions/index";

const User = props => {
  return (
    <div>
      <h1>User</h1>
      <button onClick={props.getUser} className="btn btn-primary">
        Get Current User
      </button>
      <br/>
      {props.isLoading && (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
      {props.user && (
        <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
          <div className="card-body">
            <h5 className="card-title">{props.user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              @{props.user.username}
            </h6>
            <p className="card-text">{props.user.company.name}</p>
            <button className="card-link">Card link</button>
            <button className="card-link">Another link</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.user.isLoading,
    user: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(actions.getUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
