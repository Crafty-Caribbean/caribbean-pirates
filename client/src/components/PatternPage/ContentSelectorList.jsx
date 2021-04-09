import React from 'react';

import ContentButtons from './ContentButtons';

import styles from './PatternSummary.css';

const ContentSelectorList = (props) => {
  const listofButtons = ['description', 'comments'];
  return (
    <div className={styles.contentSelector}>
      {listofButtons.map((button, i) => (
        <ContentButtons
          key={i}
          buttonName={button}
          selected={props.selected}
          changeContentDisplay={props.changeContentDisplay}
        />
      ))}
    </div>
  );
};

export default ContentSelectorList;
