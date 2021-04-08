import React from 'react';

import ContentButtons from './ContentButtons';

const ContentSelectorList = (props) => {
  const listofButtons = ['description', 'comments'];
  return (
    <div>
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
