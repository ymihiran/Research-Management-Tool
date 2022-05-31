import React, {useState,useEffect} from "react";
import axios from 'axios';
//import emailjs from 'emailjs-com'



export default function SelectMember() {
    
    
    const[request,setRequest] = useState([]);
    const [GroupId, setGroupId] = useState();
    const [ResearchArea, setResearchArea] = useState("");
    const [ResearchTopic, setResearchTopic] = useState("");
   // const [email, setemail] = useState("");
   

    useEffect(()=>{

        
        setGroupId(localStorage.getItem('GroupId'));
        setResearchArea(localStorage.getItem('ResearchArea'));
        setResearchTopic(localStorage.getItem('ResearchTopic'));
    
            
  

    },[])

    async function getMember(){      
        await axios.get(`http://localhost:8070/user/panel/${ResearchArea}`).then((res)=>{
             setRequest(res.data.existingUser);
         }).catch((err)=>{
          })
         }
         getMember()

    // function sendEmail(e){
    //   e.preventDefault();
       
    //   emailjs.sendForm(
    //     'service_1rscqx4',
    //     'template_2448m8r',
    //       e.currentTarget,
    //      'user_tUQwDqaHvto3giQMLhlPe'

    //   ).then(res=>{
    //     console.log(res);

    //   }).catch(err=>console.log(err));


    // }



        const setData = (data) => {
 
          let {GroupId, ResearchArea,ResearchTopic} = data;
        //   const Dstatus="Assigned";
        //   const status="Assigned";
          const dId=data._id;
          //const email=data.email;

          localStorage.setItem('dId',dId);
          localStorage.setItem('GroupId', GroupId);
          localStorage.setItem('ResearchArea', ResearchArea);
          localStorage.setItem('ResearchTopic', ResearchTopic);
         // localStorage.setItem('email', email);
          
        
        //   const OngoingDelivery = {
             
        //     dId,
        //     tripId,
        //     destination,
        //     Dstatus
          
        // };
    
        // axios
        //   .post(
        //     "http://localhost:8070/trip/addTrip",
        //      OngoingDelivery
        //   )
        //   .then(() => {
            
                                 
        //   })
        //   .catch((err) => {
        //     alert(err);
        //   });
          

          
        //   const statusupdate={tripId,status};
        //   axios
        //   .put(
        //     `http://localhost:8070/routeReq/updateReqRoute/${tripId}`,statusupdate

             
        //   )
        //   .then(() => {
            
                                 
        //   })
        //   .catch((err) => {
        //     alert(err);
        //   });

        //   alert("Driver Assigned");

          

}

//search bar functions
const filterData = (users,searchkey) =>{

  const result= users.filter((Users) =>
  Users.nearbyTown.toLowerCase().includes(searchkey) ||
  Users.nearbyTown.includes(searchkey)||
  Users.vehicleType.toLowerCase().includes(searchkey) ||
  Users.vehicleType.includes(searchkey)
  )

  setRequest(result)
}


//  function handleSearch(e) {
       
//  const searchkey = e.currentTarget.value;

//  axios.get("http://localhost:8070/driver/allprof").then((res)=>{

//          if(res.data.success){
             
//            filterData(res.data.existingDRouter,searchkey)

//          }
 
 
//  });

// }


    return (
        <div>
            
            <h1 style={{color:"#322B5F"}}><b> <center> Select Panel Members </center> </b> </h1>
            
            <div style={{marginLeft:"3%"}}>
           <h3> <b> Group ID: {GroupId} </b></h3>
           <h3> <b> Research Topic : {ResearchTopic} </b></h3> </div>
             <br/>

       {/* search bar
       <div className="container">
                <div className="row">
               
                   <h4> Search Here </h4>
                  <div className="col-lg-3 mt-2 mb-2">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search vehicle type or town"
                        name="searchQuery"
                        onChange={handleSearch}
                      >
                          
                        </input>
                      
                  </div>

                </div>

            </div> */}
            <br/>
            <div className = "container">
            
           <table className="table" style={{backgroundColor:"white"}}>

                <thead>
                        <tr>
                        <th className="tColumn" style={{color:"#322B5F",fontWeight:"bold",fontSize:"24px"}} scope="col">Number</th>
                        <th className="tColumn" style={{color:"#322B5F",fontWeight:"bold",fontSize:"24px"}} scope="col">Registration Number</th>
                        <th className="tColumn" style={{color:"#322B5F",fontWeight:"bold",fontSize:"24px"}} scope="col">Member Name</th>
                        <th className="tColumn" style={{color:"#322B5F",fontWeight:"bold",fontSize:"24px"}} scope="col">Research Area</th>
                       
                        </tr>

                </thead>
            <tbody>

              {request.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td> <b> {data.reg_number} </b></td> 
                            <td><b> {data.name} </b> </td> 
                             <td> <b>{data.research_area} </b></td> 
                           
                            <td>
                            <a className="l-btn-accept" style={{width:"200px",fontWeight:"bold",textDecoration:'none'}} 
                            //type="submit"
                            //onClick={() => setData(data)}
                            href="/"
   
                        >
                            <i></i>&nbsp;Allocate for the group
                            </a>
                            </td>

                            {/* <td>
                            
                            <form onSubmit={sendEmail}>
                            <input type="email" name="mail" value={data.email} />
                            &nbsp; &nbsp;
                            <button>Send Email</button></form>
                           
                           
                          
                            
                            </td> */}

                        </tr>
                        

                ))}
                
                
                </tbody> 

            </table>

            
            <br/> <br/><br/><br/>
           {/* <a className="btn btn-success"
           href={`http://localhost:3000/routeReq/allRouteReq`}
           style={{textDecoration:'none'}}
           
           >Go Back</a> */}

       
          
          </div>
          
            
        </div>
    )
}
