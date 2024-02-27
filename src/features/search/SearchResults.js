import React from 'react'
import styles from '../../stylesheets/redditposts.module.css';
import { selectNewfeedItems } from '../redditPosts/newsfeedSlice';
import { useSelector } from 'react-redux';
import RedditPost from '../../components/RedditPost';


export default function SearchResults() {

    const searchFeed = useSelector(selectNewfeedItems)

    return (
        <section className={styles.newsFeed} >
        {searchFeed.map(news => (
            <RedditPost
                key={news.data.id}
                title={news.data.title}
                url={news.data.url}
                author={news.data.author}
                time={news.data.created}
                comments={news.data.num_comments}
                votes={news.data.score}
            />
        ))}
        </section>

    );
}
