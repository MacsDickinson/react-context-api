import React, {Component} from 'react';

import './App.css';
import AppHeader from './Components/AppHeader';
import Sessions from './Components/Sessions';
import storedSessions from './stored_sessions.json';
import ThemedText from './Components/ThemedText';

import {ThemeContext, themes} from './Components/theme-context';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = (e) => {
      const theme = themes[e.target.value];
      this.setState(({theme}));
    }

    this.state = {
      Sessions: [],
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div
          style={{
          background: this.state.theme.background,
          color: this.state.theme.foreground
        }}>
          <div className="App container">
            <AppHeader/>

            <Sessions sessions={storedSessions}/>
            <footer
              className="footer"
              style={{
              background: this.state.theme.background,
              color: this.state.theme.foreground
            }}>
              <div className="content has-text-centered">
                <p>
                  <ThemedText>
                    <strong>Tech Edge 1.1</strong> is brought to you by <a href="https://www.skybetcareers.com/">Sky Betting & Gaming</a>.
                  </ThemedText>
                </p>
              </div>
            </footer>
          </div>

        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
