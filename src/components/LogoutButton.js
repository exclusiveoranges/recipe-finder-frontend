import React from 'react';
import Adapter from './Adapter';
import { withRouter } from 'react-router';
import { Button } from 'semantic-ui-react';

const LogoutButton = ({ to = "/login", history }) => {
    return (
      <Button basic color='red'
        className="logout-button"
        onClick={() => {
          Adapter.logout();
          history.push(to);
        }}
      >
        Logout
      </Button>
    )
}

export default withRouter(LogoutButton);
