import React, { useState } from 'react';
import styles from '../stylesheets/redditposts.module.css';
import likeButton from '../likeIcon.png';
import dislikeButton from '../dislikeIcon.png';
import comment from '../comment.png';

const getTimeDifference = (epoch) => {
    let date1 = new Date( epoch * 1000);
    let date2 = new Date()
    let timeDifference = date2.getTime() - date1.getTime();
    return Math.round(timeDifference / (1000 * 3600))
}

export default function RedditPost(props) {
    
    let [ displayFullText, setDisplayFullText ] = useState(props.data.selftext.length > 200 ? false : true);

    const handleToggleText = () => {
        setDisplayFullText(true);
    }


    const fullText = <p className={styles.description} >{props.data.selftext}</p>;
    const partialText = <p className={styles.description} >{props.data.selftext.slice(0, 200)} <button onClick={handleToggleText} >See More...</button></p>;
    

    return (
        <>
            <div className={styles.voteGroup}>
                <button className={styles.nullBtn}>
                    <img className={styles.likeButton} src={likeButton} alt='Thumbs up for like' />
                </button>
                <p className={styles.voteCount} >{props.data.score}</p>
                <button className={styles.nullBtn}>
                    <img className={styles.dislikeButton} src={dislikeButton} alt='Thumbs down for dislike'/>
                </button>
            </div>
            <h2 className={styles.postTitle} >{props.data.title}</h2>

            {
                props.data.selftext === "" ? "" : displayFullText ? fullText : partialText
            }

            {(props.data.url.endsWith("jpeg") || props.data.url.endsWith("png") || props.data.url.endsWith("jpg"))
            && <img className={styles.redditImage} src={props.data.url} alt='Test data' />}
            
            {
                props.data.is_video &&  
                    <video className={styles.redditMedia} controls src={props.data.secure_media.reddit_video.fallback_url}>
                        Your browser does not support the video tag.
                    </video>
            }      
                            
            <div className={styles.optionButtons}>
                <p>Posted by {props.data.author}</p>
                <p>{getTimeDifference(props.data.created)} hours ago</p>
                <p><img className={styles.commentIcon} src={comment} alt='comment icon'/>{props.data.num_comments}</p>
            </div>
        </>
    )
}
