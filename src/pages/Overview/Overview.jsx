import React from "react";
import './Overview.css';
import {Link} from "react-router-dom";
import posts from '../../data/posts.json';

function Overview() {
    return (
        <>
            <main className="page-container">
                <section>
                    <h1>Blog overzichtspagina</h1>
                    <h3>Aantal blogposts: {posts.length}</h3>
                    <ul>
                        {posts.map((post) => {
                            return <li key={post.id}>
                                <Link to={`/overview/${post.id}`}>
                                    {post.title}
                                </Link>
                            </li>
                        })}
                    </ul>
                </section>
            </main>

        </>
    );

}


export default Overview;
