import React, { Component } from 'react';

import Comment from './Comment';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render() {
        const comments = this.state.comments.map(x => <Comment 
            author={x.author}
            content={x.content}
            avatar={x.avatar}
            key={x.id}
        />);

        console.log(comments);

        return (
            <div>
                {comments}
            </div>
        )
    }
}

export default Comments;