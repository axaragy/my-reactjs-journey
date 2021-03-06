import React, { Component } from "react";
import { Container } from "reactstrap";
import { TableComponent } from "../../components";
import { connect } from "react-redux";
import { deleteUserDetail, getUsersList } from "../../actions/userAction";
class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUserDetail());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
