

import React from 'react';
import { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





const generator = () => {

    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [SID, setSID] = useState("");
    const [RollNo, setRollNo] = useState("");
    const [Branch, setBranch] = useState("");
    const [PhoneNo, setPhoneNo] = useState([]);
    const [ImageUrl, setImageUrl] = useState("");
    const [scanResultFile, setScanResultFile] = useState("");
    const [data, setData] = useState("");

    const addData = () => {
        setData(
            {
                Fname: FName,
                LName: LName,
                SID: SID,
                RollNo: RollNo,
                Branch: Branch,
                PhoneNo: PhoneNo
            });
    }
    return (




        <div className="InputTxt">




            <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(event) => { setFName(event.target.value) }} value={FName} />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(event) => { setLName(event.target.value) }} value={LName} />
            <TextField id="outlined-basic" label="SID" variant="outlined" onChange={(event) => { setSID(event.target.value) }} value={SID} />
            <TextField id="outlined-basic" type="number" label="Roll No" variant="outlined" onChange={(event) => { setRollNo(event.target.value) }} value={RollNo} />
            <select id='select1' class="form-select" aria-label="Default select example" onChange={(event) => { setBranch(event.target.value) }} value={Branch}>
                <option selected>Select Branch</option>
                <option value="COMPS">COMPS</option>
                <option value="CS&E">CS&E</option>
                <option value="ECS">ECS</option>
                <option value="ENTC">ENTC</option>
                <option value="MME">MME</option>
                <option value="CIVIL">CIVIL</option>
                <option value="AI&DS">AI&DS</option>
                <option value="Mechanical">Mechanical</option>
                <option value="AIML">AIML</option>
                <option value="ELEX">ELEX</option>
                <option value="IOT">IOT</option>
                <option value="E&TC">E&TC</option></select>
            <TextField id="outlined-basic" label="Phone-No" type="number" variant="outlined" onChange={(event) => { setPhoneNo(event.target.value) }} value={PhoneNo} />
            <Button variant="contained" color="success" onClick={addData}>Create QR</Button>

        </div >


    )
}


export default generator