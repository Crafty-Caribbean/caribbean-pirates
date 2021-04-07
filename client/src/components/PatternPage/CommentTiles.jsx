import React from 'react';
import styles from './CommentTiles.css';

const CommentTiles = (props) => {
  const { comment } = props;

  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August ', 'September', 'October', 'November', 'December'];
  const newDate = new Date(comment.created_at);
  const monthNumber = newDate.getMonth();
  const month = monthOptions[monthNumber];
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const date = `${month} ${day}, ${year}`;

  return (
    <div className={styles.commentTiles}>
      <div className={styles.username}>{comment.username}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>{comment.content}</div>
    </div>
  );
};

export default CommentTiles;
