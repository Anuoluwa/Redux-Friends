import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './Spinner';
import Login from './Login';
import Friends from './Friends';
import FriendForm from './FriendForm';

const StyledContainer = styled.div`
  padding: 10px;
`;

export default function Container() {
  return (
    <StyledContainer>
      <Spinner>
        <BrowserRouter>
          <Route exact path='/' render={pr => {
            // if local storage legit, return the jsx we commened out above
            // otherwise REDIRECT!!!
            if (localStorage.getItem('token')) {
              return (
                <>
                  <Friends />
                  <FriendForm />
                </>
              );
            }
            return <Redirect to='login' />;
          }} />
          <Route path='/login' component={Login} />

        </BrowserRouter>
      </Spinner>
    </StyledContainer>
  );
}
