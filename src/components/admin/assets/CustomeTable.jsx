import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Button from '@mui/material/Button/Button';
import { deleteRequest } from '../../api/deleteRequest';

export default function CustomeTable({data, title = 'Manage Purchase', setDatas}) {

  function deleteData(){
    deleteRequest('deletePurchase', data.id).then((res)=>{
      console.log("deleted data : ", res)
      setDatas(res);
    })
  }
   
  return (
    <div style={{color:'black', backgroundColor:'#F8F6F4', color:'#435B66', marginLeft:'1.5rem', marginRight:'1.5rem', marginTop:"1.5rem" ,  paddingLeft:"1.5rem",  paddingRight:"1.5rem", paddingTop:"1.5rem", marginBottom:"1.5rem", textAlign:'center'}}>
        <h2>{title}</h2>
    <Table>
      <TableHead style={{backgroundColor:'#9DB2BF'}}>
        <TableRow>
        <TableCell>Buyer Id</TableCell>
          <TableCell>Buyer Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell>Timestamp</TableCell>
          <TableCell>Delete</TableCell>
          {/* <TableCell>Procede</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        { data? data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.buyerName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.timestamp}</TableCell>
            {/* <TableCell><Button href="#text-buttons" color='success'>Procede</Button></TableCell> */}
            <TableCell><Button href="#text-buttons" onClick={deleteData} color='error'>Delete</Button></TableCell>
          </TableRow>
        )): ''}
      </TableBody>
    </Table>
    </div>
  );
}