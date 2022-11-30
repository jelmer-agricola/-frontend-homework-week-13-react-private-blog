import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';


function Navigation({isAuth, toggleAuth}) {
    const navigate = useNavigate();

    function signOut() {
        toggleAuth(false);
     navigate('/');

    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Home
                </NavLink>
                </li>

                {isAuth ?  <li><NavLink to="/overview"
                                        className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Blogposts
                </NavLink>
                </li>:
                    <li>
                        <NavLink to="/login"
                                 className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Login
                        </NavLink>

                    </li>

                }



                <li>
                    <button type="button" onClick={signOut}>
                        Uitloggen
                    </button>
                </li>


            </ul>

        </nav>
);
}

export default Navigation