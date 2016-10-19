import React from 'react';
import auth from '../../services/Auth';
import { Link  } from 'react-router';

// Material UI 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Paper from 'material-ui/Paper';

export default class SignOut extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    auth.logout();
  }


  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
          <div className="container marginTop">
            <Paper zDepth={1} className="mediaPiece">
              <div className="about">
                <p>You are logged out. Go back to <Link to="/">Home</Link></p>
              </div>
            </Paper>
          <br/>
        </div>
      </MuiThemeProvider>
    )
}
}