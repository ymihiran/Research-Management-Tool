import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [CurrentUser, setCurrentUser] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    //console.log(token)
                    const res = await axios.get(`http://localhost:8070/user/infor/${user._id}`, {
                        headers: {Authorization: token}
                    })

                    setCurrentUser(res.data)
                    setIsLogged(true)
                    res.data.user_role == "Admin" ? setIsAdmin(true): setIsAdmin(false)
                    console.log(res)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        CurrentUser: [CurrentUser, setCurrentUser],
    }
}

export default UserAPI;