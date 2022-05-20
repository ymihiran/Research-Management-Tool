import "./CSS/topicsub.css";
import "./CSS/btrap.css";

export default function SubmitTopic()  {

    return(
        <div className="topic-container">
            <div style={{backgroundColor:"#0F0934"}}>Panel 1
                <div  className="t-title-container">
                    <h1>Submit </h1>
                </div>
            </div>
            <div style={{backgroundColor:"white"}}>Panel 2
            
            <div className="t-from-container">
                <form >
                        <div className="mb-3">
                            <label className="t-form-label" style={{color:"#322B5F"}}>Group ID</label>
                            <input type="text"  style={{width:"450px"}} className="t-form-control" id="cUName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="t-form-label">Group Name</label>
                            <input type="text"  style={{width:"450px"}}  id="cName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="t-form-label">Research Field</label>
                            
                            <select className='form-control' name="Field" id="Field" style={{width:"450px",border: "2px solid #ced4da"}}>
                                <option value="Default">Select one</option>
                                <option value="Artificial Interligance">Artificial Interligance</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Games">Games</option>
                                <option value="Robotics">Robotics</option>
                            </select>

                        </div>

                        <div className="mb-3">
                            <label className="t-form-label">Research Topic</label>
                            <input type="text"  style={{width:"450px"}}  id="cName"   
                            />
                           
                        </div>

                        <div className="mb-3">
                            <label className="t-form-label">Group Leader's email</label>
                            <input type="text"  style={{width:"450px"}}  id="cName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="t-form-label">Comments (Optional)</label>
                            <input type="text"  style={{width:"450px", height:"150px"}}  id="cName"
                                
                            />
                        </div>



                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0F0934"}} >Submit</button>
                    </form>
            
                </div>

            </div>
        </div>
    );
        


}