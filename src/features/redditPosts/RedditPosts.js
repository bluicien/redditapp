import React from 'react';
import RedditPost from '../../components/RedditPost';
import styles from '../../stylesheets/redditposts.module.css';

export default function RedditPosts() {
    return (
        <section className={styles.newsFeed}>
            <RedditPost />
            <RedditPost />
        </section>
    );
}