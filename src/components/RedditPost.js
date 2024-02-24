import React from 'react';
import styles from '../stylesheets/redditposts.module.css';
import likeButton from '../likeIcon.png'
import dislikeButton from '../dislikeIcon.png'

export default function RedditPost() {
    return (
        <article className={styles.post}>
            <div className={styles.voteGroup}>
                <a><img className={styles.likeButton} src={likeButton} /></a>
                <p className={styles.voteCount} >14k</p>
                <a><img className={styles.dislikeButton} src={dislikeButton} /></a>
            </div>
            <h2>DHL Super Rugby Pacific Tipping is now open!</h2>
            <h3>This is your opportunity to win big, so get your picks in now.</h3>
            <img src='https://i.redd.it/5juzx2kpxekc1.jpeg'/>
            <div className={styles.optionButtons}>
                <p>Posted by Someone</p>
                <p>7 Hours ago</p>
                <p>Comments</p>
            </div>
            
        </article>
    );
}