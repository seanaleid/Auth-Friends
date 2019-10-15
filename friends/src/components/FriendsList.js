import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "./axiosWithAuth"

import AddFriendForm from "./AddFriendForm"
import FriendCard from "./FriendCard"

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    

    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => setFriends(res.data))
            .catch(err => console.log("FriendsList.js axiosWithAuth has an error", err.response))
    }) 

   

    return(
        <div className="container">
            <div className="friend-routes">
                <AddFriendForm />
                {friends.map((friend, index) => (
                    <FriendCard key={index} friend={friend} />
                ))}
                <p>create friend</p>
                <p>update friend</p>
                <p>delete friend</p>
            </div>
        </div>
    )
}

export default FriendsList;

// const mapStateToProps = state => {
//     return {
//         friends: state.friends,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect (
//     mapStateToProps,
//     { fetchFriends }
// )(FriendsList)