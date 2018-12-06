import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}


export default connect(mapStateToProps)(Users)
