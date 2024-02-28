import React, { useEffect } from 'react';
import RedditPost from '../../components/RedditPost';
import styles from '../../stylesheets/redditposts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsfeed, selectNewfeedItems } from './newsfeedSlice';
import { Link } from 'react-router-dom';

export default function RedditPosts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadNewsfeed());
    }, [dispatch])

    const newsfeed = useSelector(selectNewfeedItems)
    
    return (
        <section className={styles.newsFeed}>
        {newsfeed.map(news => (
            <Link key={news.data.id} className={styles.posts} to={`${news.data.permalink}`}>
                <RedditPost
                    data={news.data}
                />
            </Link>
        ))}
        </section>
    );
}