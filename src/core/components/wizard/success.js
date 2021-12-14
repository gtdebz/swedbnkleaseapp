import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <div style={{ padding: '30px' }}>

              <AppBar title="Success" />
			  
							<h1><center>SHIPPING CONFIRMATION!!</center></h1> 
							
							<center><i class="fa fa-envelope"></i> <h3>Printing your shipping details...</h3></center>
							
              
              <p><b>Thank You!!</b>  We are printing your shipping label to pdf file and email it to you.</p>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;