import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { ActionResult, RootState } from '../../../common';
import { User } from '../../models';
import { fetchAllUsers } from '../../actions';

export interface UsersProps extends RouteComponentProps<{}> {
  users: User[];
  fetchAllUsers: () => ActionResult<{}>;
}

export class Users extends React.Component<UsersProps, {}> {
  render() {
    return <div />;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.users.items
  };
};

export default connect(mapStateToProps, { fetchAllUsers })(Users);
