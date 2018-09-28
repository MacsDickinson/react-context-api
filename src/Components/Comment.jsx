import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {author, avatar, content} = this.props;
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-48x48">
                        <img src={avatar} alt={`${author} avatar`}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{author}</strong>
                            <br/> {content}
                            <br/>
                            <small>
                                <a>Like</a>
                                ·
                                <a>Reply</a>
                                · 2 hrs</small>
                        </p>
                    </div>
                </div>
            </article>
        )
    }
}

export default Comment;