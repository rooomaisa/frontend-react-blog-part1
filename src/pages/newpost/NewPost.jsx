import './NewPost.css'
import React, {useState} from 'react';
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {Link, useNavigate} from "react-router-dom";

function NewPost() {
    const [formState,setFormState] = useState({
        title:'',
        subtitle:'',
        author:'',
        content:'',
    });

    function handleChange (e){
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        })
    }

    const navigate= useNavigate();

    // hier ga je nu dus die knop regelen maar omdat we niet communiceren met back end in dit voorbeeld staat het nu zo. normaal zou je dan dus ook doorlinken naar posts vandaar de usenavigate const. en daar zou je dan de nieuw toegevoegde blog moeten zien.
    // maar deze voeg je niet toe aan de button zoals een link woord op een pagia maar die zit i de functie meegegeven. dus die uitgecommit navigate('/posts)'); is een opd die je meegeeft. ik heb hem nu los erom gezet dan doet tie het ook maar hij hoort dus in die functie.

    function handleSubmit(e){
        e.preventDefault();

        console.log({
            ...formState,
            shares:0,
            comments:0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        });
        console.log('De blog is succesvol verzameld! 🌈');
        // navigate('/posts');
    }

    return (
        <section className={'new-post-section outer-content-container'}>
        <div className={'inner-content-container__text-restriction'}>
            <form className={'new-post-form'}>
            <h1>Post toevoegen</h1>
            <label htmlFor={'post-title'}>Titel</label>
                <input
                    type={'text'}
                    id={'post-title'}
                    name={'title'}
                    required
                    value={formState.title}
                    onChange={handleChange}
                    />

                <label htmlFor={'post-subtitle'}>Subtitle</label>
                <input
                    type={'text'}
                    id={'post-subtitle'}
                    name={'subtitle'}
                    required
                    value={formState.subtitle}
                    onChange={handleChange}
                    />

                <label htmlFor={'post-author'}>Naam en achternaam</label>
                <input
                    type={'text'}
                    id={'post-author'}
                    name={'author'}
                    required
                    value={formState.author}
                    onChange={handleChange}
                    />

                <label htmlFor={'post-content'}>Blogpost</label>
                <textarea
                    name={'content'}
                    id={'post-content'}
                    cols={'30'}
                    rows={'10'}
                    required
                    minLength={300}
                    maxLength={2000}
                    value={formState.content}
                    onChange={handleChange}>
                </textarea>

                <Link to={'/posts'}>
                <button
                    type={'submit'}
                    // onClick={handleSubmit}>
                    >Toevoegen
                </button>
                </Link>

            </form>
        </div>
        </section>
    );
}

export default NewPost;