import React from 'react';
import axios from 'axios';
import styles from './CommentsSection.css';
import CommentTiles from './CommentTiles.jsx'

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    const { comments } = this.props;
    this.state = {
      commentText: '',
      comments: comments,
    };
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getComments = this.getComments.bind(this);
    this.addComments = this.addComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
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
    this.addComments(commentText);
    this.setState({ commentText: '' });
  }

  getComments() {
    const { patternId } = this.props;
    axios.get(`/api/comments/${patternId}`)
      .then((res) => {
        this.setState({ comments: res.data });
      })
      .catch((error) => {
        console.log('Error retrieving comments: ', error);
      })
  }

  addComments(commentContent) {
    const { patternId, username } = this.props;
    const commentsObject = {
      username: username || 'Anonymous',
      content: commentContent,
    };
    axios.post(`/api/comments/${patternId}`, commentsObject)
      .then((res) => {
        console.log('Post res: ', res);
        this.getComments();
      })
      .catch((error) => {
        console.log('Error posting comments: ', error);
      })
  }

  render() {
    const { comments, commentText } = this.state;
    //  className={`${styles.contentOption} ${isSelected}`}
    let tileClass;

    if (comments.length === 0) {
      tileClass = styles.noCommentTiles;
    }

    return (
      <div className={styles.commentsSection}>
        <div className={`${styles.commentTiles} ${tileClass}`}>
          {
            comments.length === 0 && (<p>There are no comments.</p>)
          }
          {
            comments.map((comment) => (
              <CommentTiles key={comment.id} comment={comment} />
            ))
          }
        </div>
        <form className={styles.commentForm} onSubmit={this.handleSubmit}>
          <input
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
      </div>
    );
  }
}

export default CommentsSection;
