import React from "react";

// redux - connect to the store
// import { connect } from "react-redux";

// import actions
// import { fetchFriends } from "../actions";

// import components

const FriendsList = () => {


    return(
        <div className={"container"}>
            <div className="friend-routes">
                <p>create friend</p>
                <p>update friend</p>
                <p>delete friend</p>
            </div>
            <h1>Friends go here</h1>
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