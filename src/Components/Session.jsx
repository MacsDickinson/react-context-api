import React, {Component} from 'react';
import ThemedButton from './ThemedButton';
import ThemedTitle from './ThemedTitle';
import ThemedBlockquote from './ThemedBlockquote';

class Session extends Component {
    renderHeader(title, speaker) {
        return (
            <div
                className="tile is-child"
                style={{
                height: '150px'
            }}>
                <ThemedTitle>
                    “{title}”
                </ThemedTitle>
                <p className="subtitle">
                    {speaker}
                </p>
            </div>
        )
    }

    renderSpeakerInfo(speakerBio) {
        return (
            <div className="tile">
                <ThemedBlockquote>
                    {speakerBio}
                </ThemedBlockquote>
            </div>

        )
    }

    renderButtons() {
        return (
            <div className="tile level">
                <div className="level-item">
                    <ThemedButton>
                        <span className="icon">
                            <i className="fas fa-heart"></i>
                        </span>
                    </ThemedButton>
                </div>
                <div className="level-item">
                    <ThemedButton>
                        <span className="icon">
                            <i className="fas fa-share"></i>
                        </span>
                    </ThemedButton>
                </div>
                <div className="level-item">
                    <ThemedButton>
                        <span className="icon">
                            <i className="fas fa-comment"></i>
                        </span>
                    </ThemedButton>
                </div>
            </div>
        )
    }

    render() {
        const {title, speaker, description, speakerBio} = this.props;

        return (
            <article className="tile is-parent is-vertical col">
                {this.renderHeader(title, speaker)}

                <div
                    className="tile content"
                    style={{
                    height: '200px'
                }}>
                    {description}
                </div>

                {this.renderSpeakerInfo(speakerBio)}
                {this.renderButtons()}
            </article>
        )
    }
}

export default Session;