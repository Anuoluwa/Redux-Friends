import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Friend from './Friend';

export class Friends extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    const friends = this.props.friends || [];
    return (
      <div>
        <div>
          {friends.map(friend => (
            <Friend
              key={friend.id}
              friends={friend}
            />
          ))}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
      friends: state.friends,
    };
  }
  
  export default connect(
    mapStateToProps,
    actionCreators,
  )(Friends);

