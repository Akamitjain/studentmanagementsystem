import axios from "axios";
import { useNavigate } from "react-router-dom";

const MydataComDel=(props)=>
{
    const navigate =useNavigate();
    const recDelete=(id)=>
 {
    
    const Id = id;
    // alert(`jijih${Id}`);
    axios.delete(`http://localhost:4000/Student/${Id}`)
      .then(response => {
        alert("Record Succefully Deleted");
        
        navigate('/display',{replace: true});

      })
      .catch(error => {
        console.error(error);
      });
    }

      return(
    <>
      <tr>
        
        <td>{props.nm}</td>
        <td>{props.btc}</td>
        <td>{props.ct}</td>
        <td>{props.fs}</td>


        <td>
            <a href="#" onClick={()=>{ recDelete(props.myid)}}>
            <img src={props.myimg} width="40" height="40"/>
            </a>
            </td>
      </tr>
    </>
  )


}
export default MydataComDel;