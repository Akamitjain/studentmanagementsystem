import { useState } from "react";
import axios from "axios";

const FormApp=()=>
{
    const [input, setInput] = useState({});
    const inputHandel=(e)=>
    {
        let name = e.target.name;
        let value = e.target.value;

        setInput(values=>({...values, [name]:value}));

        console.log(input);
    }

    // const submitHandel=()=>
    // {
    //     console.log(input);
    //     console.log("Data Saved !!");
    //     alert("Your data is saved sucessfully !!!");
    // }

    const submitHandel =()=>
    {
        axios.post("http://localhost:4000/Student", input).then((response)=>{
            console.warn(input);
        });

        alert("Record Sucessfully submited !!!")
    }
    return(
        <>
        <center>
        <div style={{width:'500px'}}>
        <div class="mb-3 mt-3 form">
            {/* <form className="form" method="post"> */}
                <h1>Registration Form Here !!</h1>
                <br/>
                Enter Name : <input type="text" value={input.Name} name="Name"  onChange={inputHandel} />
                <br/>
                <br/>
                Enter Batch : <input type="text" value={input.Batch} name="Batch"  onChange={inputHandel} />
                <br/>
                <br/>
                Enter City : <input type="text" value={input.City} name="City"  onChange={inputHandel} />
                <br/>
                <br/>
                Enter Fees : <input type="text" value={input.Fees} name="Fees"  onChange={inputHandel} />
                <br/>
                <br/>
                <button type="submit" onClick={submitHandel}>Click Here !!</button>
            {/* </form> */}
            </div>
        </div>
        </center>
    </>
    );
}
export default FormApp;