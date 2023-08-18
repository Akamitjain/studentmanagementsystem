import { useState} from "react";
import axios from "axios";
import MyTable from "./MyTable";


const Search=()=>
{
    const[nm,setnm]=useState("");
    const  [ data, setData ]=useState([]);
    const handleInput=(e)=>
    {
        setnm(e.target.value);
        console.log(nm);
    }
    const handleForm=()=>
    {
        
        let url=`http://localhost:4000/Student/?Name=${nm}`;
        axios.get(url).then((res)=>{
            setData(res.data);
        });
        console.log(data);
    }


    const MyData=data.map((key)=> (
     <MyTable 
    nm={key.Name} btc={key.Batch} ct={key.City} fs={key.Fees}/>
    ));
    return(
        <>
        <h1 align="center">Display Student Records!!</h1>
        <b>Enter Student Name : </b> <input type="text" name="nm" value={nm}
        onChange={handleInput}/>
        <button onClick={handleForm}>search Record</button>

        <br></br>
        <table class="table m-auto mt-4 table-striped table-hover" style={{width:'500px'}}>
            <thead>
            <tr>
                
                <th class="table-success">Student Name</th>
                <th class="table-success">Batch</th>
                <th class="table-success">City</th>
                <th class="table-success">Fees</th>
            </tr>
            </thead>
            <tbody>
                {MyData}
            </tbody>
        </table>
        </>
    );
}
export default Search;