import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth"


const AddFriendForm = (props) => {
    const [addFriends, setAddFriends] = useState({
        name: "",
        age: "",
        email: ""
    })

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth
            .post("/api/friends", addFriends)
            .then(res => setAddFriends(res.data))
            .catch(err => console.log(`post friends error`, err.response))
    }

    const inputHandler = e => {
        setAddFriends({...addFriends, [e.target.name]: e.target.value });
    };

    return(
        <div className="add-friend-form">
            <h1 className="add-friend-form">Add Friend</h1>
            <form className="input-name">
                <input 
                    type="text" 
                    name="name" 
                    label="name" 
                    placeholder="Name"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text" 
                    name="age" 
                    label="age" 
                    placeholder="Age"
                    value={props.age}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text" 
                    name="email" 
                    label="email" 
                    placeholder="email"
                    value={props.email}
                    onChange={inputHandler}
                    className="input"
                />
                <button className="add-friend-button" onClick={submitHandler}>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;