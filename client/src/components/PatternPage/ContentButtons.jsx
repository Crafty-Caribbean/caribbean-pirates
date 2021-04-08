import React from 'react';
import styles from './ContentButtons.css';

const ContentButtons = (props) => {
  const { buttonName, selected, changeContentDisplay } = props;
  // console.log(changeContentDisplay);
  let isSelected = '';
  if (buttonName === selected) {
    isSelected = styles.selected;
  }
  return (
    <button
      className={`${styles.contentOption} ${isSelected}`}
      onClick={(event) => { changeContentDisplay(event.target.value); }}
      type="button"
      value={buttonName}
    >
      { buttonName }
    </button>
  );
};

export default ContentButtons;
