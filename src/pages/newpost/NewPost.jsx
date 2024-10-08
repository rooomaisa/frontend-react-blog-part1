import './NewPost.css'
import React, {useState} from 'react';
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function NewPost() {
    const [formState,setFormState] = useState({
        title:'',
        subtitle:'',
        author:'',
        content:'',
    });

    const [error, setError] = useState(false);
    const [loading, setLoading]= useState(false);
    const [submitSuccesId, setSubmitSuccesId] = useState(null);
    // die set submit succes id gebruik je an om gelijk door te linke naar de post pagina en die id post te laten zien

    function handleChange (e){
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        })
    }



    // hier ga je nu dus die knop regelen maar omdat we niet communiceren met back end in dit voorbeeld staat het nu zo. normaal zou je dan dus ook doorlinken naar posts vandaar de usenavigate const. en daar zou je dan de nieuw toegevoegde blog moeten zien.
    // maar deze voeg je niet toe aan de button zoals een link woord op een pagia maar die zit i de functie meegegeven. dus die uitgecommit navigate('/posts)'); is een opd die je meegeeft. ik heb hem nu los erom gezet dan doet tie het ook maar hij hoort dus in die functie.

    async function handleSubmit(e){
        e.preventDefault();
        setError(false);

        // console.log({
        //     ...formState,
        //     shares:0,
        //     comments:0,
        //     created: new Date().toISOString(),
        //     readTime: calculateReadTime(formState.content),
        // });

        try {
            const response = await axios.post ('http://localhost:3000/posts', {
                ...formState,
                shares:0,
                comments:0,
                created: new Date().toISOString(),
                readTime: calculateReadTime(formState.content),
            });
            console.log(response.data);
            console.log('De blog is succesvol verzameld! 🌈');
        } catch (e){
            console.error(e);
            setError(true);
        }  finally {
        setLoading(false);
    }

        // navigate('/posts');
    }

    return (
        <section className={'new-post-section outer-content-container'}>
        <div className={'inner-content-container__text-restriction'}>
            {!submitSuccesId ?
            <form className={'new-post-form'} onSubmit={handleSubmit}>
                {/*If you attach the handler only to a <button>, the form will not submit when the user presses "Enter," which could be confusing for some users.*/}
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


                <button
                    type={'submit'}
                    // onClick={handleSubmit}>
                    >Toevoegen
                </button>

                {error && <p>Er is iets misgegaan bij het versturen van het formulier. Probeer het opnieuw</p>}
            </form>
                : <p>De blogpost is succesvol toegevoegd. Je kunt deze <Link to={`/posts/${submitSuccessId}`}>hier</Link> bekijken.</p>}
        </div>
        </section>
    );
}

export default NewPost;