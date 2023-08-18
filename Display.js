import { useState, useEffect } from "react";
import axios from "axios";
import MydataCom from "./MydataCom";


const Display=()=>
{
    const  [ data, setData ]=useState([]);

    const loadData=()=>
    {
        axios
        .get("http://localhost:4000/Student")
        .then((res)=>{
            setData(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[]);

    const tblData=data.map((key)=> (<MydataCom 
    nm={key.Name} btc={key.Batch} ct={key.City} fs={key.Fees}/>));
    return(
        <>
        <h1 align="center">Display Student Records!!</h1>
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
export default Display;
