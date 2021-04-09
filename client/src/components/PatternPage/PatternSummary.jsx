import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import styles from './PatternSummary.css';
import CommentsSection from './CommentsSection';
import Tag from './Tag';
import FavoritesButton from './FavoritesButton';
import ContentSelectorList from './ContentSelectorList';
import BuyButton from './BuyButton';

class PatternSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      contentDisplay: 'description', // 'description' or 'comments'
    };
    this.changeContentDisplay = this.changeContentDisplay.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
  }

  changeContentDisplay(newContent) {
    this.setState({ contentDisplay: newContent });
  }

  favoriteHandler() {
    if(!this.state.isLiked) {
      this.setState({isLiked: !this.state.isLiked})
      console.log('send axios request to like it')
      //post
      //axios.post('/') send with body obj
      // axios.post(`/api/users/${user}/favorite/`, {pattern_id = this.props.patterninfo.id})
    } else {
      this.setState({isLiked: !this.state.isLiked})
      console.log('send axios request to unlike')

      //delete
      //axios.delete('/')  end point includes id of delete
      // axios.delete(`/api/users/${user}/favorite/${this.props.patterinfo.id}`)
    }
  }

  render() {
    const { isLiked, contentDisplay } = this.state;
    const { patterninfo } = this.props;

    return (
      <div className={styles.patternSummaryContainer}>

        <div className={styles.content}>

          <div className={styles.titleAndButton}>
            <div className={styles.patternName}>
              {patterninfo.name}
            </div>
            <div className={styles.favoriteButton}>
              <FavoritesButton
                size={30}
                isLiked={isLiked}
                handleClick={this.favoriteHandler}
              />
            </div>
          </div>

          <div className={styles.authorAndBuyButtonContainer}>
            <div className={styles.authorContainer}>
              <button className={styles.authorName} type="button">
                <Link to={`/users/${patterninfo.author.id}`}>
                  <IoPersonCircle
                    color="#777777"
                    size="50"
                  />
                </Link>
              </button>
              <p>
                <Link to={`/users/${patterninfo.author.id}`} className={styles.authorLink}>
                  {patterninfo.author.username}
                </Link>
              </p>
            </div>

            <BuyButton price={patterninfo.price} handleClick={console.log} />

          </div>
          <div className={styles.tagContainer}>
            <div className={styles.craftTypeTag}>
              <Tag type={patterninfo.craft_type} />
            </div>
            <div className={styles.skillLevelTag}>
              <Tag type={patterninfo.skill_level} />
            </div>
          </div>

          <ContentSelectorList
            selected={contentDisplay}
            changeContentDisplay={this.changeContentDisplay}
          />

          {contentDisplay === 'description'
            && (
              <div className={styles.descriptionInfo}>
                <p className={styles.descriptionParagraph}>
                  {patterninfo.description}
                </p>
              </div>
            )}
          {contentDisplay === 'comments'
          && (
            <CommentsSection patternId={patterninfo.id} comments={patterninfo.comments} />
          )}
        </div>


      </div>
    );
  }
}

export default PatternSummary;
