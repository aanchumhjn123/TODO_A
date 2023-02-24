import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "../styles/login.css";

const Signup = () => {
  const [datas, setDatas] = useState([]);
  const [username, setUsername] = useState();
  const [lastname, setLastname] = useState();
  const [newData, setNewData] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
   const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fromdata"));
    const vall = JSON.parse(localStorage.getItem("user"));
    if (!vall) {
      if (data) {
        datas.push(data);
      }
    }
    else {
      const val = vall.map((item) => {
        if (!newData.includes(item.email)) {
          newData.push(item.email);
          datas.push(item);
        }
      });
    }
  }, [])
  const signup = (e) => {
    e.preventDefault();
    if (username && lastname && email && password) {
      const fromData = {
        fname: username,
        lname: lastname,
        email: email,
        pwd: password,
      };
      if (!newData.includes(email)) {
        datas.push(fromData);
        console.log(datas);
        localStorage.setItem("fromdata", JSON.stringify(fromData));
        localStorage.setItem("user", JSON.stringify(datas));
      }
      else {
        alert('already have account');
      }

       navigate("/todo");
    }
    else {
      alert("fill all the field")
    }
  };

  return (
    <div>
      <section className="main_section">
        <div className="logcenter">
          <div className="card  cardstyle">
            <form onSubmit={signup}>
              <div className="card-body">
                <h5 className="card-title">Sign up</h5>
                <div className="inputmargin">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control inputstyle"
                    id="specificSizeInputName"
                    placeholder="username"
                  />
                  <br />
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control inputstyle"
                    placeholder="lastname"
                  />
                  <br />
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
                  Create an Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="logdiv">
          <h6>
            Already have an Account ?
            <Link to="/login" className="linkstyle">
              sign in
            </Link>
          </h6>
        </div>
      </section>

    </div>
  )
}

export default Signup