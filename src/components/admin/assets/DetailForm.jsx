import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button/Button';
import { padding } from '@mui/system';

export default function DetailForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [link, setLink] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleUpdate = () => {
    // Perform update logic with phoneNumber and link values
    // For demonstration purposes, we'll just log the values to the console
    console.log('Phone Number:', phoneNumber);
    console.log('Link:', link);
  };

  return (
    <form style={{marginLeft:'5rem', marginRight:'5rem', backgroundColor:'#EEEEEE', textAlign:'center', marginTop:'5rem', paddingTop:'3rem', paddingBottom:'3rem', paddingLeft:'3rem', paddingRight:'3rem'}}>
        <h1 style={{ color:'#435B66'}}>Other Details</h1>
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Link"
        value={link}
        onChange={handleLinkChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </form>
  );
}
