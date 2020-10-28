import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        //phone: "",
        email: "",
        password: ""
    });

    const { name, username, email, password } = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    
    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                   <div className="form-group row">
                       <label for="name" class="col-sm-2 col-form-label">Name</label>
                       <div className="col-sm-10">
                           <input 
                              type="text" 
                              className="form-control" 
                              id="formGroupExampleInput" 
                              placeholder="Name"
                              name="name" 
                              value={name} 
                              onChange={e => onInputChange(e)} 
                            />
                              
                       </div>
                   </div>
                   <div className="form-group row">
                       <label for="username" className="col-sm-2 col-form-label">User Name</label>
                       <div className="col-sm-10">
                           <input 
                              type="text" 
                              className="form-control" 
                              id="formGroupExampleInput" 
                              placeholder="User Name" 
                              name="username" 
                              value={username}
                              onChange={e => onInputChange(e)} 
                            />
                       </div>
                    </div>
                    {/*<div class="form-group row">
                       <label for="phone" class="col-sm-2 col-form-label">Phone #</label>
                       <div class="col-sm-10">
                           <input 
                           type="tel" 
                           class="form-control" 
                           id="phone" 
                           //pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                           placeholder="Phone Number" 
                           name="phone"
                           value={phone} 
                           onChange={e => onInputChange(e)} 
                           />
                           
                       </div>
                    </div>*/}
                  
                    <div className="form-group row">
                       <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                       <div className="col-sm-10">
                           <input 
                           type="text"  
                           className="form-control" 
                           id="staticEmail" 
                           placeholder="name@example.com" 
                           name="email"
                           value={email}
                           onChange={e => onInputChange(e)}
                           />
                       </div>
                    </div>
                    <div className="form-group row">
                       <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                       <div className="col-sm-10">
                           <input 
                           type="password" 
                           className="form-control" 
                           id="inputPassword" 
                           placeholder="Password"
                           name="password" 
                           value={password} 
                           onChange={e => onInputChange(e)}
                           />
                       </div>
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;