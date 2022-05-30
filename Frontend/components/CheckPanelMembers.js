import React, {useState,useEffect} from "react";
import axios from 'axios';


export default function CheckMembers() {

    const[request,setRequest] = useState([]);
   

    useEffect(()=>{

           
        axios.get("http://localhost:8070/topic").then((res)=>{
                setRequest(res.data.topicRouter);
            }).catch((err)=>{
                alert(err.message);
             })

    },[])


    const setData = (data) => {
        let {groupID,rField,rTopic} = data;

        localStorage.setItem('GroupId',groupID);
        localStorage.setItem('ResearchArea',rField);
        localStorage.setItem('ResearchTopic',rTopic);
       

}

    return (
        <div>
            
            <h1><b> <center> Check Panel Members</center> </b> </h1>

            <div className = "container">
            <div style={{display:"flex"}}>  
            <table className="table" style={{backgroundColor:"white"}}>

                <thead>
                        <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Group Id</th>
                        <th scope="col">Research Area</th>
                        <th scope="col">Research Topic</th>
                        </tr>

                </thead>
            <tbody>
              {request.map((data,index)=>(
                        
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            
                            <td> {data.groupID} </td>
                            <td> {data.rField} </td>
                            <td> {data.rTopic} </td>
                           
                            <td>
                                
                                <a className="btn btn-warning" 
                                onClick={() => setData(data)}
                                href={`/`}
                                style={{textDecoration:'none'}}>
                                <i></i>&nbsp;Check Panel Members
                                </a>
                                </td>

                        </tr>
                        

                ))}
                
                </tbody> 

            </table>
           

</div>  </div>
            
        </div>
    )
}
