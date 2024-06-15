import { Component } from "react";

export default class App extends Component
{
  constructor()
  {
    super()
    this.state={
      student:[
        {roll:101,name:"swati",Branch:'cs',age:21,marks:201.23},
        {roll:102,name:"priya",Branch:'es',age:24,marks:241.23},
        {roll:103,name:"shanu",Branch:'ee',age:27,marks:761.23},
        {roll:104,name:"riya",Branch:'me',age:29,marks:402.23}



        
      
      ]
    }
  }
  add=(event)=>
  {
    var roll=this.rollbox.value*1;
    
   var ob={
    roll,
    name:this.namebox.value,
    Branch:this.branchbox.value,
    age:this.agebox.value*1,
    marks:this.marksbox.value*1,

   }
   this.setState({student:[...this.state.student,ob]})
   event.preventDefault()
   event.target.reset()
  }

  deletestudent=(roll)=>
  {
    this.setState({student : this.state.student.filter(ob=>ob.roll!=roll)})

  }
  render()
  {
    return<div>
      <h1 className="alert-success text-center">Student Records</h1>
      <div className="container">
        <form>
          
        <div className="row mt-3">
          <div className="col-xl-4  col-lg-4">
            <input type="number" raef={ob=>this.rollbox=ob} placeholder="roll number" className="form-control" required/>
          </div>
          <div className="col-xl-4  col-lg-4">
            <input type="text" ref={ob=>this.namebox=ob} placeholder="Name" className="form-control" required/>
          </div>
          <div className="col-xl-4  col-lg-4">
            <select className="form-contro;" ref={ob=>this.branchbox=ob} required>
            <option value=" ">choose option</option>
            <option>Ec</option>
            <option>Me</option>
            <option>cs</option>
            <option>IT</option>
            <option>EE</option>
            </select>
          </div>
          
        </div>
        <div className="row mt-3">
          <div className="col-xl-4  col-lg-4">
            <input type="name" ref={ob=>this.agebox=ob} placeholder="age" className="form-control" required/>
          </div>
          <div className="col-xl-4  col-lg-4">
            <input type="text" ref={ob=>this.marksbox=ob} placeholder="Marks" className="form-control" required/>
          </div>
          <div className="col-xl-4  col-lg-4">
            <button  className="btn btn-success">Add student</button>
            
          </div>
         

        </div>


        </form>
   
      </div>
      <br></br>
      <table className="table mt-3">
        <thead>
         
          
            <tr>
            <th>RollNumber</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Age</th>
              <th>Marks</th>
              <th>opration</th>
            </tr>
            </thead>
            
            <tbody>
              {this.state.student.map(ob=><tr>
                <td>{ob.roll}</td>
                <td>{ob.name}</td>
                <td>{ob.Branch}</td>
                <td>{ob.age}</td>
                <td>{ob.marks}</td>
                <td>
                  <button onClick={()=>this.deletestudent(ob.roll)} className="btn-sm btn-danger">Delete</button>
                </td>
              </tr>)}
            </tbody>
        

      </table>
      
    </div>
  }
}