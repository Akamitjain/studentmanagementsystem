import { useState, useEffect } from "react";
import axios from "axios";
import MyDataComDel from "./MyDataComDel";
import delmg from "./delete.jpeg";

const Delete=()=>
{
    const  [ data, setData ]=useState([]);

    const loadData=()=>
    {
        axios
        .get("http://localhost:4000/Student")
        .then((res)=>{
            setData(res.data);
        });
        console.log(data);
    }

    useEffect(()=>{
        loadData();
    },[]);

    const tblData=data.map((key)=> (<MyDataComDel 
        myid={key.id} nm={key.Name} btc={key.Batch} ct={key.City} fs={key.Fees} myimg={delmg}
     />));
    return(
        <>
        <h1 align="center">Delete Student Records!!</h1>
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
                {tblData}
            </tbody>
        </table>
        </>
    );
}
export default Delete;
