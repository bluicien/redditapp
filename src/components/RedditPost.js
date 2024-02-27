import React from 'react';
import styles from '../stylesheets/redditposts.module.css';
import likeButton from '../likeIcon.png';
import dislikeButton from '../dislikeIcon.png';
import { Link } from 'react-router-dom';
import comment from '../comment.png';

export default function RedditPost(props) {

    const getTimeDifference = (epoch) => {
        let date1 = new Date( epoch * 1000);
        let date2 = new Date()
        let timeDifference = date2.getTime() - date1.getTime();
        return Math.round(timeDifference / (1000 * 3600))
    }

    return (
        <>
            <article className={styles.post}>
                <div className={styles.voteGroup}>
                    <Link><img className={styles.likeButton} src={likeButton} alt='Thumbs up for like' /></Link>
                    <p className={styles.voteCount} >{props.votes}</p>
                    <Link><img className={styles.dislikeButton} src={dislikeButton} alt='Thumbs down for dislike'/></Link>
                </div>
                <h2>{props.title}</h2>
                {props.url.endsWith("jpeg")
                ? <img className={styles.redditImage} src={props.url} alt='Test data' />
                : <></>
                }
                    
                <div className={styles.optionButtons}>
                    <p>Posted by {props.author}</p>
                    <p>{getTimeDifference(props.time)} hours ago</p>
                    <p><img className={styles.commentIcon} src={comment} alt='comment icon'/>{props.comments}</p>
                </div>
            </article>
        </>
    )
}
