import React, {SyntheticEvent, useState} from 'react';
import '../Login.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('login',{
            email,
            password,
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/'} />;

    }

    return (
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Signin</h1>
                    <label htmlFor="inputEmail" className="visually-hidden">email</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="メールアドレス" required autoFocus
                           onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="inputPassword" className="visually-hidden">password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                           onChange={e => setPassword(e.target.value)}
                    />
                <button className="w-100 btn btn-lg btn-primary" type="submit">submit</button>
            </form>
        </main>
    );
};

export default Login;
