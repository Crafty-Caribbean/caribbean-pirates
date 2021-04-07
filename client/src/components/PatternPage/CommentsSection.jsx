import React from 'react';
import styles from './CommentsSection.css';
import CommentTiles from './CommentTiles.jsx'

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
    };
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentInput(event) {
    this.setState({
      commentText: event.target.value,
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      commentText: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { commentText } = this.state;
    console.log('Comment posted: ', commentText);
  }

  render() {
    // const { comments } = this.props;
    const comments = [
      {
        id: 1, username: 'Monica', content: 'Amazing work!', created_at: '2021-04-07T09:57:29.103Z',
      },
      {
        id: 2, username: 'Ben', content: 'Loved this pattern', created_at: '2021-04-07T09:58:03.547Z',
      },
      {
        id: 3, username: 'Ronny', content: 'Great details', created_at: '2021-04-07T09:58:27.559Z',
      },
      {
        id: 4, username: 'Gordon', content: 'Time to learn something new!', created_at: '2021-04-07T09:58:57.185Z',
      },
      {
        id: 5, username: 'Phil', content: 'I want to make this one for my dog~~', created_at: '2021-04-07T09:59:30.909Z',
      },
      {
        id: 6, username: 'Mikey', content: 'Oh yeah, I need this!', created_at: '2021-04-07T10:06:00.961Z',
      },
      {
        id: 7, username: 'Ika', content: 'Presented to you by the amazing Crafty Caribbean', created_at: '2021-04-07T10:29:39.246Z',
      },
    ];
    const { commentText } = this.state;

    return (
      <div className={styles.commentsSection}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className={styles.commentInput}
            onChange={this.handleCommentInput}
            placeholder="Add a comment"
            value={commentText}
            name="commentText"
          />
          <div className={styles.buttonsContainer}>
            <button
              onClick={this.handleReset}
              className={styles.cancelButton}
              type="submit"
            >
              cancel
            </button>
            <button className={styles.postButton} type="submit">Post</button>
          </div>
        </form>
        {
          comments.map((comment) => (
            <CommentTiles comment={comment} />
          ))
        }
      </div>
    );
  }
}

export default CommentsSection;
