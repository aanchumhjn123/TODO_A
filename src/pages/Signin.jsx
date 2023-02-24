import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
 import "../styles/login.css";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [arr, setArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const vall = JSON.parse(localStorage.getItem("user"));
        if (vall) {
            const val = vall.map((item) => {
                data.push(item);
            })
        }
    }, []);

    const signin = async (e) => {
        e.preventDefault();
        const datas = data.map((item) => {
            item.email === email &&
                arr.push(item);
                console.log(item)
        })
        console.log(arr[0].email=== email)
        if (arr[0].email === email && arr[0].pwd === password) {
            
            localStorage.setItem("loggedin", true);
            localStorage.setItem("email", JSON.stringify(email));
            navigate('/todo')
        }
        else {  
            alert("Not matches")
        }
    };
    // arr.map((item,i)=> {if (item.email === email) {
    //   console.log(item.email);
    //  } else {
    //   console.log(i);
    //  }});

    return (
        <>
            <section className="main_section">
                <div className="logcenter">
                    <div className="card  cardstyle">
                        <form onSubmit={signin}>
                            <div className="card-body">
                                <h5 className="card-title"> Sign in</h5>
                                <div className="inputmargin">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control inputstyle"
                                        id="inputEmail4"
                                        placeholder="enter your email"
                                    />
                                    <br />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        class="form-control"
                                        id="inputPassword4"
                                        placeholder="inter your password"
                                    />
                                    <br />
                                </div>
                                <button type="submit" className="cartbtn w-100">
                                    Continue
                                </button>
                                <br />

                                <span className="card-text">
                                    By continuing you agree
                                    <Link to="" className="linkstyle">
                                        Conditions of Use
                                    </Link>
                                    and
                                    <Link to="" className="linkstyle">
                                        Privscy Notice
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="logdiv">
                    <button className="logbtn">
                        <Link to="/signup">Create Your account</Link>
                    </button>
                </div>
            </section>

        </>
    );
};

export default Signin;