import "./CSS/topicsub.css";
import "./CSS/btrap.css";

export default function AddMarking()  {

    return(
        <div className="marking-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

               
            </div>

            

            <div style={{backgroundColor:"white"}}>
            <div className="t-list-head-container">
                    <label className="h-text"> <label style={{color:"#FF5631"}}> CREATE</label> MARKING</label> <br className="br1" />
                    <label className="h-text">SCHEME</label>
                    <hr />
            </div>
            
            <div className="m-from-container">
                <label style={{fontWeight:'bold'}}> General Information</label>
                <form >
                        <div className="mb-3">
                            <label className="m-form-label">Specialization</label>
                            
                            <select className='form-control m-select' name="Field" id="Field" style={{fontSize:'0.8rem', width:"450px",border: "2px solid #ced4da", height:"30px"}}>
                                <option value="Default">Select one</option>
                                <option value="Artificial Interligance">Artificial Interligance</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Games">Games</option>
                                <option value="Robotics">Robotics</option>
                            </select>

                        </div>

                        <div className="m-sub">

                        <div className="m-sub-container">
                            <div className="mb-3">
                                <label className="m-form-label" style={{color:"#322B5F"}}>Project name</label>
                                <input type="text"  style={{width:"280px", height:"30px"}} className="t-form-control" id="cUName"
                                    
                                />
                            </div>

                        </div>
                        <div className="m-sub-container2">
                            <div className="mb-3">
                                <label className="m-form-label" style={{color:"#322B5F"}}>Total Marks</label>
                                <input type="text"  style={{width:"150px", height:"30px"}} className="t-form-control" id="cUName"
                                    
                                />
                            </div>

                        </div>
                        </div>

                        <label style={{fontWeight:'bold'}}> Add New Criteria</label>

                        <div className="mb-3">
                            <label className="m-form-label">Criteria Name</label>
                            <input type="text"  style={{width:"450px", height:"30px"}}  id="cName"
                                
                            />
                        </div>

        
                        <div className="mb-3">
                            <label className="m-form-label">Mark Percentage (%)</label>
                            <input type="text"  style={{width:"450px", height:"30px"}}  id="cName"
                                
                            />
                        </div>

                        



                            <button type="submit" className="btn btn-primary" style={{backgroundColor:"#84809F",width:"200px",fontWeight:"bold"}} >+ Add criteria</button>
                            <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0F0934",width:"200px",fontWeight:"bold",marginLeft:'20px'}} > Save</button>

                    </form>

                    <div className="bottom-t-container">
                        <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                        <label className="bottom-t"> Management Tool</label>
                    </div>
            
                </div>

            </div>

            <div style={{backgroundColor:'#D5D3E2'}}>

            </div>

            
        </div>
    );
        


}