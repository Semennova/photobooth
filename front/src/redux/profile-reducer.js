// const ADD_POST = 'ADD-POST';


let initialState = {
    posts: [
        { id: 1, message: "Hi! How are you?", minsPassed: '11 mins ago' },
        { id: 2, message: "It's my first post", minsPassed: '14 mins ago' },
        { id: 3, message: "Hey you!!", minsPassed: '10 mins ago' },
        { id: 4, message: "Ain't no sunshine when she's gone", minsPassed: '17 mins ago' }
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state
    }
}

export default profileReducer;