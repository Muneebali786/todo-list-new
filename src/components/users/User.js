import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User =() => {
    const [user, setUser] = useState({
        name:"",
        username: "",
        email: "",
        password: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
           <Link className="btn btn-primary" to="/">Back to Home</Link>
           <h1 className="display-4">User Id: {id}</h1>
           <hr />
           <ul className="list-group w-50">
               <li className="list-group-item">name: {user.name}</li>
               <li className="list-group-item">user name: {user.username}</li>
               <li className="list-group-item">email: {user.email}</li>
               <li className="list-group-item">password: {user.password}</li>
           </ul>
        </div>
    );
};

export default User;