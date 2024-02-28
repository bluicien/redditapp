import React from 'react';
import styles from '../stylesheets/redditposts.module.css';
import RedditPost from './RedditPost';
import { useSelector } from 'react-redux';
import { selectPost } from '../features/redditPosts/newsfeedSlice';
import { useParams } from 'react-router-dom';

export default function Post() {

    const { id } = useParams();

    const post = useSelector(selectPost(id))
    
    return (
        <section className={styles.newsFeed}>
            <article className={styles.posts}>

                <RedditPost
                    key={post.data.id}
                    data={post.data}
                />
            </article>
        </section>
        )
}