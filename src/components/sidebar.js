import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import rubberBand from 'react-animations';

class TDNASidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({
        open: false
    });

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
                <RaisedButton label="Open" onClick={this.handleToggle}/>
                <Drawer docked={false} width={300} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
                    <MenuItem onClick={this.handleClose}>Basketball</MenuItem>
                </Drawer>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default TDNASidebar;