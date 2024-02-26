import React, { useEffect } from 'react';
import RedditPost from '../../components/RedditPost';
import styles from '../../stylesheets/redditposts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsfeed, selectNewfeedItems } from './newsfeedSlice';

export default function RedditPosts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadNewsfeed());
    }, [dispatch])

    const newsfeed = useSelector(selectNewfeedItems)

    return (
        <section className={styles.newsFeed}>
        {newsfeed.map(news => (
            <RedditPost
                key={news.data.id}
                title={news.data.title}
                url={news.data.url}
                author={news.data.author}
                time={news.data.created}
                comments={news.data.num_comments}
            />
        ))}
        </section>
    );
}