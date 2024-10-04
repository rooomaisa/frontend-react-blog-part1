import React from 'react';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import formatDateString from '../../helpers/formatDateString.js';
// import {CaretLeft, Clock} from "@phosphor-icons/react";
import './PostDetailPage.css';

// te bereiken door bijv 12 of whater erachter:
//     http://localhost:5173/posts/12

function PostDetailPage() {
    const { id } = useParams();

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                <span className="post-detail-read-time">
                    {/*<Clock color="#50535C" size={18}/>*/}
                    <p> {readTime} minuten lezen</p>
                </span>
                <p>{content}</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>

                <Link to="/posts" className="back-link">
                    {/*<CaretLeft color="#38E991" size={22}/>*/}
                    <p>Terug naar de overzichtspagina</p>
                </Link>

            </div>
        </section>
    );
}

export default PostDetailPage;