import React, {Component} from 'react';

import ThemeSelector from './ThemeSelector';
import logo from './../tech_edge.png';
import ThemedTitle from './ThemedTitle';

class AppHeader extends Component {

    render() {
        return (
            <header className="level">
                <div className="level-left App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <ThemedTitle>1.1</ThemedTitle>
                </div>
                <div className="level-right">
                    <ThemeSelector/>
                </div>
            </header>
        )
    }
}

export default AppHeader;
