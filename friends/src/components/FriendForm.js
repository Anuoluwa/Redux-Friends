import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { postNewFriend } from '../state/actionCreators'

export class FriendForm extends Component {
    nameRef = React.createRef();
    ageRef = React.createRef();
    emailRef = React.createRef();

    onAddFriend = () => {
        this.props.postNewFriend({
          name: this.nameRef.current.value,
          age: this.ageRef.current.value,
          email: this.emailRef.current.value,
        });
        this.nameRef.current.value = '';
        this.ageRef.current.value = '';
        this.emailRef.current.value = '';
      }


  componentDidMount() {
    const { update, match, history } = this.props;

    if (update) {
      axios.get('http://localhost:5000/friends')
      .then(res => {
          const friend = res.data.filter(friend => (
            friend.id.toString() === match.params.id)
          );

          // check if a friend is found and set state, otherwise return back to home
          if (friend.length > 0) {
            this.setState({
              name: friend[0].name,
              age: friend[0].age,
              location: friend[0].location,
              email: friend[0].email,
            })
          } else {
            window.alert(`Cannot find a friend with id ${match.params.id}`)
            history.push('/')
          }
        })
        .catch(err => {
          console.log('ERR');
        });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const friend = {...this.state};
    
    // although friend's id is being pass down for both updating and adding friend,
    // the method in App.js will ignore friend's id in the case of adding friend
    this.props.handleSubmit(friend, this.props.match.params.id);
    this.props.history.push('/');
  }
  render() {
    const { history, update } = this.props;
    return (
      <div>
      <div>
      
          <div>
              <input ref={this.nameRef} type="text" name="name"  placeholder=" name" />
              <input ref={this.ageRef} type="text" name="age"  placeholder=" age" />
              <input ref={this.emailRef} type="text" name="email"    placeholder="email"/>
              <button type="submit" content={update ? 'update' : 'add'}
              onClick={this.onAddFriend}>Add New Friend</button>
              <button onClick={ () => {history.push('/')}}>Cancel</button>
          </div>
      </div>
        
      </div>
    )
  }
}
  
  export default connect(null, { postNewFriend })(FriendForm);
  