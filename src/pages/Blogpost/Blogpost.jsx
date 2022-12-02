import React from "react";
import posts from '../../data/posts.json';

import './Blogposts.css'

import { useParams, Link} from "react-router-dom";


function Blogpost() {
    const { id } = useParams();

    const post = posts.find((post) => {
        return post.id === id;

        console.log(post);
    });

    return(

        <>
            <article>
                <h1>{post.title}</h1>
                <h3>{post.date}</h3>
                <p>{post.content}</p>
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>

        </>
    );
}
export default Blogpost;