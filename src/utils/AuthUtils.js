

const TOKEN_KEY = "token"

const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}
const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}

const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}
export default {
    getToken,
    setToken,
    clearToken
}