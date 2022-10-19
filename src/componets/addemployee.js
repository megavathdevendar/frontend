import { useState } from "react";
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Addemployee() {

    // const navigate = useNavigate();

    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [emailId, setEmail] = useState('');
    const [password, setPwd] = useState('');


    const setFirstName = (e) => {
        setFName(e.target.value);
    }
    const setLastName = (e) => {
        setLName(e.target.value);
    }
    const setEmailId = (e) => {
        setEmail(e.target.value);
    }

    const setPassword = (e) => {
        setPwd(e.target.value);
    }
    const navigate = useNavigate();


    // const navigateHome = () => {
    //     navigate("/home");

    // }

    const addemployee = (e) => {
        e.preventDefault();
        let data = {

            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password

        }

        fetch('http://localhost:7001/employee/addemployee', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json())
            .then(json => console.log(json));

        alert("employee Added Successfully !!! ")
        navigate('/home');
    }


    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={e => addemployee(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Add  NEW ADDEMPLOYEE</h3>


                    <div className="form-group mt-3">
                        <label>firstName</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter first name"
                            onChange={(e) => setFirstName(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>lastName</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter ur last"
                            onChange={(e) => setLastName(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>emailId</label>
                        <input type="text"
                            className="form-control mt-1"
                            placeholder="Enter the email"
                            onChange={(e) => setEmailId(e)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>password</label>
                        <input type="password"
                            className="form-control mt-1"
                            placeholder="please enter password."
                            onChange={(e) => setPassword(e)}
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">ADDEMPLOYEE</button>

                    </div>

                </div>
            </form>
        </div>
    );

}
export default Addemployee;

