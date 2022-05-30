import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory,useLocation} from 'react-router-dom'
import {isLength, isMatch} from './utils/validation/Validation'
import {showSuccessMsg, showErrMsg} from './utils/notification/Notification'


const initialState = {
    name: '',
    password: '',
    cf_password: '',
    mobile:'',
    user_role:'',
    research_area:'',
    reg_number:'',
    err: '',
    success: ''
}

export default function Profile() {

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [data, setData] = useState(initialState)
    const {name,mobile,user_role,research_area,reg_number,password,cf_password,err,success} = data
    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const location =useLocation();
    

    useEffect(() => {

        async function getUser(){
             await axios.get(`http://localhost:8070/user/infor/${user._id}`).then((res)=>{
                   localStorage.setItem("user",JSON.stringify(res.data))
                   setUser(JSON.parse(localStorage.getItem('user')))
               }).catch((error)=>{
                  console.log(error)
                   
               })
           }
           getUser()
    
   },[user._id,location])

    
    const handleChange = e => {
    const {name, value} = e.target
    setData({...data, [name]:value, err:'', success: ''})
}


    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

            if(file.size > 1024 * 1024)
                return setData({...data, err: "Size too large." , success: ''})

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({...data, err: "File format is incorrect." , success: ''})

            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('http//:localhost:8070/api/upload_avatar', formData)

            setLoading(false)
            setAvatar(res.data.url)
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    async function updateInfor() {
        try {
            axios.patch(`http://localhost:8070/user/update/${user._id}`, {
                name: name ? name : user.name,
                avatar: avatar ? avatar : user.avatar,
                mobile:mobile? mobile:user.mobile,
                user_role:user_role? user_role:user.user_role,
                research_area:research_area? research_area:user.research_area,
                reg_number:reg_number? reg_number:user.reg_number
            })

            setData({...data, err: '' , success: "Updated Success!"})
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    async function updatePassword() {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 8 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
           await axios.post(`http//:localhost:8070/user/reset/${user._id}`, {password})

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
         updateInfor()   
    }





  return (
      <div>
    <div>
    {err && showErrMsg(err)}
    {success && showSuccessMsg(success)}
    {loading && <h3>Loading.....</h3>}
    </div>
    <div className="profile_page">
    <div className="col-left">
        <h2>User Profile</h2>

        <div className="avatar">

        <img src={avatar ? avatar : user.avatar} alt=""/>
        <span>
             <i className="fas fa-camera"></i>
            <p>Change</p>
             <input type="file" name="file" id="file_up" 
              />
         </span>
        </div>

        <div className="col-md-13 mb-3 font">
         <label htmlFor="name">Name</label>
         <input type="text"
          className="form-control"
         name="name" id="name" defaultValue={user.name}
          placeholder="Your name" onChange={handleChange}
           />
    </div>

    <div className="col-md-13 mb-3 font">
        <label htmlFor="email">Email</label>
        <input type="email"
         className="form-control"
        name="email" id="email" defaultValue={user.email}
        placeholder="Your email address" disabled />
    </div>

        <div className="col-md-13 mb-3 font">
          <label htmlFor="about">Mobile</label>
            <input type="text"
            className="form-control"
            name="about" id="about"
            placeholder="Details"defaultValue={user.mobile} onChange={handleChange} 
                    />
      </div>

    <div className="col-md-13 mb-3 font">
        <label htmlFor="research_area">Research Area</label>
        <input type="text"
         className="form-control"
        name="research_area" id="research_area" defaultValue={user.research_area}
        placeholder="Your research_area "  />
    </div>

    <div className="col-md-13 mb-3 font">
        <label htmlFor="user_role">User Role</label>
        <input type="text"
         className="form-control"
        name="user_role" id="user_role" defaultValue={user.user_role}
        placeholder="Your user_role " disabled />
    </div>

    <div className="col-md-13 mb-3 font">
        <label htmlFor="reg_number">Register Number</label>
        <input type="text"
         className="form-control"
        name="reg_number" id="reg_number" defaultValue={user.reg_number}
        placeholder="Your reg_number " disabled />
    </div>

                <div className="col-md-13 mb-3 font">
                    <label htmlFor="password">New Password</label>
                    <input type="password"
                     className="form-control"
                    name="password" id="password"
                    placeholder="Your password" value={password} onChange={handleChange} 
                    />
                </div>

                <div className="col-md-13 mb-3 font">
                    <label htmlFor="cf_password">Confirm New Password</label>
                    <input type="password"
                    className="form-control"
                    name="cf_password" id="cf_password"
                    placeholder="Confirm password" value={cf_password} onChange={handleChange} 
                    />
                </div>


              <br/>
                <div>
                    <em style={{color: "crimson"}}> 
                    </em>
                </div>
                <br/>
               <center> <button disabled={loading} onClick={updateInfor}
                >Update</button> </center>

<br/>  <br/>
            </div>


    </div>
    </div>
    
  )
}
