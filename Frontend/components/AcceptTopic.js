import "./CSS/topicsub.css";
import "./CSS/btrap.css";

export default function AcceptTopic()  {

    const history = useHistory();
    const [pid, setPid] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [address,setAddress] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    useEffect(()=>{

        setPid(localStorage.getItem('ID'));
        setName(localStorage.getItem('name'));
        setPhone(localStorage.getItem('phone'));
        setUsername(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'));
        setAddress(localStorage.getItem('address'));
        setPassword(localStorage.getItem('password'));



    },[])

    return(
        <div className="topic-container">
            <div className="side-panel">

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

                

            </div>
            <div style={{backgroundColor:"white"}}>

                <div className="head-container">
                    <label className="h-text" style={{color:"#FF5631"}}> APPROVE</label> <br className="br1" />
                    <label className="h-text">RESEARCH TOPIC</label>
                </div>
            
            <div className="t-from-container" style={{marginTop:"0px"}}>
            <form > 
                        <div className="mb-3">
                            <label className="s-form-label" >Group ID</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cUName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Name</label>
                            <input  className="s-input" disabled  type="text"  style={{width:"450px"}}  id="cName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Field</label>
                            
                            <input  className="s-input" disabled  type="text"  style={{width:"450px"}}  id="cName"
                                
                                />

                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Topic</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cName"   
                            />
                           
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Leader's email</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Comments (Optional)</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px", height:"100px"}}  id="cName"
                                
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0F0934",width:"200px",fontSize:"2rem"}} >
                            Accept
                        </button>

                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#84809F",width:"200px", marginLeft:"40px",fontSize:"2rem"}}>
                            Reject
                        </button>
                    </form>  

                    <br/>            
                </div>

            </div>
        </div>
    );
        


}