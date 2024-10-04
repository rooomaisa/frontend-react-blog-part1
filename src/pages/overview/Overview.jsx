import React from 'react';
import posts from '../../constants/data.json';
import {Link} from "react-router-dom";

function Overview() {
    return (
        <section className={'overview-section outer-content-container'}>
            <div className={'inner-content-container'}>
                <h1>Bekijk alle {posts.length} post op het platform</h1>
                <ul className={'post-list'}>
                    {posts.map((post) => {
                        return <li key={post.id} className={'post-item'}>
                        <h2 className={'post-title'}><Link to={`posts/${post.id}`}>{post.title}</Link>({post.author})
                        </h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Overview;