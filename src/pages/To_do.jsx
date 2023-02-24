import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/todo.css";

const To_do = () => {
  const [datas, setDatas] = useState([]);

  const [data, setData] = useState([]);
  const [todos, setTodos] = useState();
  const [allTodo, setAllTodo] = useState([]);
  const [newdata, setNewdata] = useState([]);
  const [filterd, setFilterd] = useState();
  const [title, setTitle] = useState();
  const [id, setId] = useState();
  const Navigate = useNavigate();
   
  const dat = JSON.parse(localStorage.getItem("user"));
  const E = JSON.parse(localStorage.getItem("email"));
  
  const dat1 = JSON.parse(localStorage.getItem("todolist"));
  // const loadedTodos = localStorage.getItem("todolist")
  // ? JSON.parse(localStorage.getItem("todoslist"))
  // : []; // new
   
 
 
  useEffect(() => {
    dat.map((item, i) => {
      if (item.email === E) {
       
        setId(i);
        setData(item.fname)
      }
    });
    //fetchdata();
  }, [id]);


  // const fetchdata = async () => {
  //   await fetch("https://jsonplaceholder.typicode.com/posts?_start=99&_limit=200")
  //     .then((response) => response.json())
  //     .then((data) => setAllTodo(data))
  //     .catch((err) => console.log(err));
  // };
  // console.log(allTodo);

   
  

  const addTodo = async () => {

    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: todos,
        userId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('response: ' + JSON.stringify(json));
        setAllTodo((posts) => [...posts, data]);
        datas.push(data);
        console.log(datas);
        localStorage.setItem("todolist", JSON.stringify(datas));
        
          
      })
      .catch((err) => {
        console.log(err);
      });

    

    
  };
 
      
  const deleteTODO = async (i) => {
       
    
     
  //   window.location.reload();
  //   const  some =  dat1.filter(index=>
  //   index !== i)
  //   localStorage.setItem("todolist", JSON.stringify(some));
      
  //  console.log(some);
    
    
    

   const id = i
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setAllTodo(
            allTodo.filter((todo,i) => {
              return i !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
       });
  };

  const logout = () => {
    localStorage.removeItem("loggedin");
    Navigate("/");
  };
  return (
    <div>
      <div className="header">
        <div>
          <span className="head"> TO DO</span>
          <span>
            <button onClick={logout} className="logb">
              logout
            </button>
          </span>
        </div>
      </div>

      <div>
        <div className="inputT">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control inputstyle"
            id="specificSizeInputName"
            placeholder="title"
          />
        </div>
        <div className="form-floating textarea">
          <textarea
            class="form-control"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            placeholder="Leave a todo here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">here....</label>
        </div>

        <button className="todiv" onClick={addTodo}>
          Create your todo
        </button>
      </div>
      <div class="row">
         
        {allTodo.map((item ,index) => (
          <div class="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> {item.title}</h5>
                <p className="card-text">{item.body}</p>
                <button
                  className="card-btn"
                  onClick={() => deleteTODO(index)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default To_do;
