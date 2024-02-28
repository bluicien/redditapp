import React from 'react'
import styles from '../../stylesheets/redditposts.module.css';
import { selectNewfeedItems } from '../redditPosts/newsfeedSlice';
import { useSelector } from 'react-redux';
import RedditPost from '../../components/RedditPost';
import { Link } from 'react-router-dom';


export default function SearchResults() {

    const searchFeed = useSelector(selectNewfeedItems)

    return (
        <section className={styles.newsFeed} >
        {searchFeed.map(news => (
            <Link key={news.data.id} className={styles.posts} to={`${news.data.permalink}`}>
                <RedditPost
                    data={news.data}
                />
            </Link>
        ))}
        </section>

    );
}
