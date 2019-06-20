import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
export class Friend extends Component {
  render() {
    const { friends } = this.props;
    return (
              <div>
                <div>
                    <h2>{friends.name}</h2>
                <div className="friend-age">
                  Age: <em>{friends.age}</em>
                </div>
                <div className="friend-email">
                  email: <strong>{friends.email}</strong>
                </div>
                <div>
                <button onClick={() => this.props.history.push(`/remove/${friends.id}`)}>Remove</button> 
                <button onClick={() => this.props.history.push(`/update/${friends.id}`)}>Update</button>
                </div>
                </div>
              </div>
          )
  }
}

export default withRouter(Friend);