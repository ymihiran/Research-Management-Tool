import "./CSS/topicsub.css";
import "./CSS/btrap.css";

export default function AcceptTopic()  {

    return(
        <div className="topic-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

                <div  className="t-title-container">
                    <label className="sideLable" style={{color:"#FF5631"}}>Submit </label> <br className="br1" />
                    <label className="sideLable" >Research</label><br className="br1" />
                    <label className="sideLable" >Topic </label> <br className="br1" />
                </div>

                <div className="sublable-container">
                    <label className="subLable">Submit topic of your research project. You can check again the status of the approval.</label>
                </div>
                <br/>
                <lable className="side-btn"> Register Now</lable>

            </div>
            <div style={{backgroundColor:"white"}}>
            
            <div className="t-from-container">
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

                    <div className="bottom-t-container">
                        <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                        <label className="bottom-t"> Management Tool</label>
                    </div>
            
                </div>

            </div>
        </div>
    );
        


}