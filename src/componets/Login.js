import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const login = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        };
        console.log(data);

        axios.post('http://localhost:7001/employee/Login', data)
            .then(response => response.data)
            .then(data => {
                if (data.length === 0) {
                    alert("email or password wrong please enter correct password");

                } else {
                    alert('Users found! u will be home page redirect');
                    let loggedUser = data;
                    console.log(loggedUser);
                    navigate('/home');
                }
            })



    }

return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={e => login(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                    <div className="text-center">
                        Already Registered?
                        <Link to="/register">Register</Link>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password"
                            className="form-control mt-1"
                            placeholder="valid password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login