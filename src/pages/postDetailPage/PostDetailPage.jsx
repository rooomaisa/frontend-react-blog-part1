import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import formatDateString from '../../helpers/formatDateString.js';
// import {CaretLeft, Clock} from "@phosphor-icons/react";
import './PostDetailPage.css';
import axios from 'axios';

// te bereiken door bijv 12 of whater erachter:
//     http://localhost:5173/posts/12

function PostDetailPage() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const { id } = useParams();

    async function fetchPost(){
        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            console.log(response.data);
            setPost(response.data);
        } catch (e) {
            console.error(e);
            setError('Something went wrong: ' + e.message);

    } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{post.author}</em> op {formatDateString(post.created)}</p>
                <span className="post-detail-read-time">
                    {/*<Clock color="#50535C" size={18}/>*/}
                    <p> {post.readTime} minuten lezen</p>
                </span>
                <p>{post.content}</p>
                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>

                <Link to="/posts" className="back-link">
                    {/*<CaretLeft color="#38E991" size={22}/>*/}
                    <p>Terug naar de overzichtspagina</p>
                </Link>

            </div>
        </section>
    );
}

export default PostDetailPage;