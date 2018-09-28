import React, {Component} from 'react';
import Session from './Session';

class Sessions extends Component {
    renderBreak() {
        return (
            <div className="tile is-break">
                <p>
                    Break
                </p>
            </div>
        )
    }
    renderSessionSlice(sessions, from, to) {
        return (
            <div className="tile is-ancestor flexbox">
                {sessions.slice(from, to)}
            </div>
        )
    }
    render() {
        const sessions = this
            .props
            .sessions
            .map(x => <Session
                speaker={x.speaker}
                title={x.title}
                description={x.description}
                speakerBio={x.speakerBio}
                key={`session-${x.id}`}
                twitter={x.twitter}
                avatar={x.avatar}/>); 
                
        return (
            <div>
                {this.renderSessionSlice(sessions, 0, 3)}
                {this.renderBreak()}
                {this.renderSessionSlice(sessions, 3, 6)}
                {this.renderBreak()}
                {this.renderSessionSlice(sessions, 6, 8)}
            </div>
        );
    }
}

export default Sessions;