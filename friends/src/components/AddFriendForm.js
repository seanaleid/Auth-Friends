import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth"


const AddFriendForm = () => {
    const [addFriends, setAddFriends] = useState({
        name: "",
        age: "",
        email: ""
    })

    const submitHandler = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/api/friends", addFriends)
            .then(res => setAddFriends(res.data))
            .catch(err => console.log(`post friends error`, err.response));
            document.getElementById("input-name").reset();
    }

    const inputHandler = e => {
        setAddFriends({...addFriends, [e.target.name]: e.target.value });
    };

    return(
        <div className="add-friend-form">
            <h1 className="add-friend-title">Add Friend</h1>
            <form className="input-name" id="input-name" onSubmit={submitHandler}>
                <input 
                    type="text" 
                    name="name" 
                    label="name" 
                    placeholder="Name"
                    value={addFriends.name}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text" 
                    name="age" 
                    label="age" 
                    placeholder="Age"
                    value={addFriends.age}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text" 
                    name="email" 
                    label="email" 
                    placeholder="email"
                    value={addFriends.email}
                    onChange={inputHandler}
                    className="input"
                />
                <button className="add-friend-button">Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;