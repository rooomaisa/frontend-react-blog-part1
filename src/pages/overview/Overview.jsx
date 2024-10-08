import React, {useEffect, useState} from 'react';
import posts from '../../constants/data.json';
import {Link} from "react-router-dom";
import axios from "axios";

function Overview() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

        async function fetchPosts() {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get ('http://localhost:3000/posts');
                setPosts(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e)
                setError('Something went wrong: ' + e.message);
            } finally {
                setLoading(false);
            }
        }

    useEffect(() => {
    fetchPosts();
    }, []);


    return (
        <section className={'overview-section outer-content-container'}>
            <div className={'inner-content-container'}>
                <button type={'button'} onClick={fetchPosts}>Get all posts</button>

               {/*om die error af te vangen*/}
                {posts.length > 0 && (
                    <>
                <h1>Bekijk alle {posts.length} post op het platform</h1>
                <ul className={'post-list'}>
                    {posts.map((post) => {
                        return <li key={post.id} className={'post-item'}>

                        <h2 className={'post-title'}>
                            <Link to={`posts/${post.id}`}>{post.title}</Link>({post.author})
                        </h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>

                        </li>
                    })}
                </ul>
                    </>
                    )}
                {error && <p>{error}</p>}
            </div>
        </section>
    );
}

export default Overview;