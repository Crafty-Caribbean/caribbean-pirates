import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import axios from 'axios';
import styles from './PatternSummary.css';
import CommentsSection from './CommentsSection';
import Tag from './Tag';
import FavoritesButton from './FavoritesButton';
import ContentSelectorList from './ContentSelectorList';
import BuyButton from './BuyButton';

import UserContext from '../UserContext.js';

class PatternSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      contentDisplay: 'description', // 'description' or 'comments'
      isPurchased: false,
    };
    this.changeContentDisplay = this.changeContentDisplay.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
    this.purchasePattern = this.purchasePattern.bind(this);
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  componentDidUpdate(prevProps) {
    let prevPatternId;
    if (prevProps.patterninfo) {
      prevPatternId = prevProps.patterninfo.id;
    }

    let thisPatternId;
    if (this.props.patterninfo) {
      thisPatternId = this.props.patterninfo.id;
    }

    if (prevPatternId !== thisPatternId) {
      this.fetchUserInfo();
    }
  }

  changeContentDisplay(newContent) {
    this.setState({ contentDisplay: newContent });
  }

  fetchUserInfo() {
    const { patterninfo } = this.props;
    const { token, currentUser } = this.context;

    if (token === '' || currentUser.userId === undefined) {
      console.log('cannot favorite, not logged in');
      return;
    }

    const favoritePatternsPromise = axios({
      method: 'get',
      url: `/api/users/${currentUser.userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const purchasedPatternsPromise = axios({
      method: 'get',
      url: `/api/users/${currentUser.userId}/purchased`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Promise.all([favoritePatternsPromise, purchasedPatternsPromise])
      .then(([favorites, purchased]) => {
        // eslint-disable-next-line arrow-body-style
        const matches = favorites.data.patterns.favorites.filter((pattern) => {
          return (parseInt(pattern.id) === parseInt(patterninfo.id));
        });

        // eslint-disable-next-line arrow-body-style
        const purchasedMatch = purchased.data.find((pattern) => {
          return (parseInt(pattern.pattern_id) === parseInt(patterninfo.id));
        });

        this.setState({
          isLiked: !!(matches.length === 1),
          isPurchased: !!purchasedMatch,
        });
      })
      .catch(console.err);
  }

  favoriteHandler() {
    const { isLiked } = this.state;
    const { patterninfo } = this.props;
    const { token, currentUser } = this.context;

    if (token === '' || currentUser.userId === undefined) {
      return;
    }

    if (isLiked) {
      axios.delete(`/api/users/${currentUser.userId}/favorite/${patterninfo.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          this.setState({
            isLiked: false,
          });
        })
        .catch(console.err);
    } else {
      axios({
        method: 'post',
        url: `/api/users/${currentUser.userId}/favorite/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          pattern_id: patterninfo.id,
        },
      })
        .then(() => {
          this.setState({
            isLiked: true,
          });
        })
        .catch(console.err);
    }
  }

  purchasePattern() {
    const { isPurchased } = this.state;
    const { patterninfo } = this.props;
    const { token, currentUser } = this.context;

    if (isPurchased) {
      console.log('already purchased');
      return;
    }

    if (token === '' || currentUser.userId === undefined) {
      console.log('cannot purchase, not logged in.');
      return;
    }

    axios({
      method: 'post',
      url: `/api/users/${currentUser.userId}/purchased/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        pattern_id: patterninfo.id,
      },
    })
      .then(() => {
        this.setState({
          isPurchased: true,
        });
      })
      .catch(console.err);
  }

  render() {
    const { isLiked, contentDisplay, isPurchased } = this.state;
    const { patterninfo } = this.props;
    const { token, currentUser } = this.context;

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

            <BuyButton
              isPurchased={isPurchased}
              price={patterninfo.price}
              handleClick={this.purchasePattern}
            />

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
            <CommentsSection
              patternId={patterninfo.id}
              comments={patterninfo.comments}
              username={currentUser.username}
            />
          )}
        </div>

      </div>
    );
  }
}

PatternSummary.contextType = UserContext;

export default PatternSummary;
