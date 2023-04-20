import axios from 'axios'
const baseUrl = 'http://localhost:8000/'

// sign in
const login = async credentials => {
    console.log(credentials,"values")
  const response = await axios.post(`${baseUrl}login`, credentials)
  console.log(response)
  return response.data
}

// Create a new account
const signup = async credentials => {
   
  const response = await axios.post(`${baseUrl}createaccount`, credentials)
  console.log(response)
  return response.data
}
export default { login,signup }