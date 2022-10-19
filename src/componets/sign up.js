import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Signup() {

    //react-hooks

    const [firstName, setFName] = useState(' ');
    const [lastName, setLName] = useState(' ');
    const [emailId, setEmail] = useState(' ');
    const [password, setPwd] = useState(' ');

    const setFirstName = (e) => {
        setFName(e.target.value);
    }
    const setLastName = (e) => {
        setLName(e.target.value);
    }
    const setemailId = (e) => {
        setEmail(e.target.value);
    }
    const setPassword = (e) => {
        setPwd(e.target.value);
    }
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        //call signup API
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password
        }


        axios.post('http://localhost:7001/employee/addemployee', data)
            .then(response => response.data)
            .then(data => {
                if (data.length === 0) {
                    alert("Not data show register page");

                } else {
                    alert('Register successfull');
                    let loggedUser = data;
                    console.log(data);
                    navigate('/login');

                }
            })
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={e => register(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already Registered?
                        {/* <span className="link-primary" onClick={onSubmit}>Login</span> */}
                        <Link to="/login">Login</Link>


                    </div>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last Name</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                            onChange={(e) => setemailId(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={(e) => setPassword(e)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" >
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2" >Forgot Password</p>
                </div>
            </form>
        </div>

    )
}
export default Signup