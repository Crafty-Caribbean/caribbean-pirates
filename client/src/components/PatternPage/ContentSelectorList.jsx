import React from 'react';
import styles from './PatternSummary.css';

import ContentButtons from './ContentButtons'

// class ContentSelectorList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSelected: 'description',
//      };
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler(event) {
//     console.log(event.target.value);
//     this.setState({isSelected: event.target.value});
//     this.props.changeContentDisplay(event.target.value);
//   }

//   render() {
//     // const { selected } = this.props;

//     // let descriptionStyle = styles.selected;
//     // let commentsStyle;

//     // if (this.props.selected === 'comments') {
//     //   commentsStyle = styles.selected;
//     //   descriptionStyle = null;
//     // }

//     // return (
//     //   <div className={styles.contentSelector}>
//     //     <button className={`${styles.contentOption} ${descriptionStyle}`} onClick={this.clickHandler} value="description" type="button">
//     //       Description
//     //     </button>
//     //     <button className={`${styles.contentOption} ${styles.contentOption2} ${commentsStyle}`} onClick={this.clickHandler} value="comments" type="button">
//     //       Comments (5)
//     //     </button>
//     //   </div>
//     // );

//     // {this.state.listofButtons.map(button => <buttonThing textValue= selected=   someprop=this.props.selected/>)}

//     // if(this.prop.selected === textValue)

//     // if (this.props.selected === 'description') {
//     //   return (
//     //     <div className={styles.contentSelector}>
//     //       <button className={`${styles.contentOption} ${styles.selected}`} onClick={this.clickHandler} value="description" type="button">
//     //         Description
//     //       </button>
//     //       <button className={`${styles.contentOption}  ${styles.contentOption2}`} onClick={this.clickHandler} value="comments" type="button">
//     //         Comments (5)
//     //       </button>
//     //     </div>
//     //   )}
//     // if (this.props.selected === 'comments') {
//     //   return (
//     //     <div className={styles.contentSelector}>
//     //       <button className={styles.contentOption} onClick={this.clickHandler} value="description" type="button">
//     //         Description
//     //       </button>
//     //       <button className={`${styles.contentOption}  ${styles.contentOption2} ${styles.selected}`} onClick={this.clickHandler} value="comments" type="button">
//     //         Comments (5)
//     //       </button>
//     //     </div>
//     //   );
//     // }

//     const listofButtons = ['description', 'comments'];
//     return (
//       <div>
//         {listofButtons.map(buttons => <ContentButtons buttonName={buttons} selected={this.props.selected} onClick={this.clickHandler} /> )}
//       </div>
//     )
//   }
// }

const ContentSelectorList = (props) => {
  const listofButtons = ['description', 'comments'];
  return (
    <div>
      {listofButtons.map((button, i) => <ContentButtons key={i} buttonName={button} selected={props.selected} changeContentDisplay={props.changeContentDisplay}/>)}
    </div>
  );
}


export default ContentSelectorList;
