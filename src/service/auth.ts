const getUserId = () => {
    return process.env.REACT_APP_USER_UUID || null
}

const getUsername = () => {
    return process.env.REACT_APP_USERNAME || null
}

const getUser = () => ({
    id: getUserId(),
    username: getUsername(),
})

const auth = {
    getUserId,
    getUsername,
    getUser,
}
export default auth