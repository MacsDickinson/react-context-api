import React, {Component} from 'react';

import {ThemeContext} from './theme-context';
import ThemedSelect from './ThemedSelect';

class ThemeSelector extends Component {
    render() {
        return (
            <div className="select">
                <ThemeContext.Consumer>
                    {({toggleTheme}) => (
                        <ThemedSelect onChange={toggleTheme}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="party">Party</option>
                        </ThemedSelect>
                    )}
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default ThemeSelector;