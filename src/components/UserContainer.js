import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({ user, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, [])
  console.log(user.user)
  return (
    <div>
      {
        user.user.map(user => <h1 key={user.id}>{user.name}</h1>)
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);