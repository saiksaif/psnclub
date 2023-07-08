import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button/Button';
import Alert from '@mui/material/Alert/Alert';


function ReaderGameColumn({setData, data, index}){
  const handleGameChange = (event) => {
    const { name, value } = event.target;
    const obj = {Name:'', Description:'', Image:'', ps4:false, ps5: false}
    console.log(index)
    if(index === 0){
      if(name == 'ps4' || name == 'ps5'){
        obj[name] = event.target.checked;
      }
      else{
        obj[name] = value;
      }
      setData([obj]);
    }else{
      const updatedData = [...data];
      if(name == 'ps4' || name == 'ps5'){
        updatedData[index] = { ...updatedData[index], [name]: event.target.checked };
      }
      else{
        updatedData[index] = { ...updatedData[index], [name]: value };
      }
      setData(updatedData);
    }
  };


  return <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'1.5rem'}}>
  <TextField
    id="outlined-number"
    label="Name"
    type="text"
    name='Name'
    size='small'
    onChange={(event) => handleGameChange(event)}
    InputLabelProps={{
      shrink: true,
    }} 
  />
  <TextField
    id="outlined-number"
    label="Description"
    type="text"
    size='small'
    name='Description'
    onChange={(event) => handleGameChange(event)}
    InputLabelProps={{
      shrink: true,
    }} 
  />
  <TextField
    id="outlined-number"
    label="Image Link"
    type="text"
    size='small'
    name='Image'
    onChange={(event) => handleGameChange(event)}
    InputLabelProps={{
      shrink: true,
    }} 
  />
  <br/>
  <div>
  <FormControlLabel
label={<Typography sx={{ color:'black' }}>PS4</Typography>  }
control={ <Checkbox name='ps4' {..."label"}  onChange={(event) => handleGameChange(event)} />}/>
<FormControlLabel
label={<Typography sx={{ color:'black' }}>PS5</Typography>  }
control={ <Checkbox {..."label"}  />}/>
</div>
  </div>
}


export default function CustomeForm() {
    const [range, setRange] = useState(1);
    const [expiry, setExpiry] = useState(1);
    const [price, setPrice] = useState(1);
    const [game, setGame] = useState([]);

    const [priceVisibilty, setPriceVisibilty] = useState(1);
    const [availability, setAvailability] = useState(false);
    const [plus, setPlus] = useState(false);
    const [primary, setPrimary] = useState(false);
    const [secondary, setSecondary] = useState(false);

 
    const handleInputChange = (event, callback) => {
      console.log(event.target.value +" --")
        if(event.target.value <= 0){
            callback(1)
        }else{
            callback(event.target.value);
        }
        
      };
 
    function DisplayRangeData(){
        window.alert(`${range}, ${expiry}, ${price}, ${game.toString()}` );
    }
 
    return (
    <div style={{ color:'#435B66', paddingTop:"1.5rem", paddingBottom:"1.5rem", textAlign:'center'}}><h2>ADD NEW ACCOUNT</h2>
    <br/>

        <FormControlLabel
        label={<Typography sx={{ color:'black' }}>Availability</Typography>  }
        control={ <Checkbox onChange={(event) => setAvailability(event.target.checked)} {..."label"} checked={availability} />}/>
        <FormControlLabel
        label={<Typography sx={{ color:'black' }}>PS PLUS</Typography>  }
        control={ <Checkbox onChange={(event) => setPlus(event.target.checked)} {..."label"}  />} checked={plus}/>
        <FormControlLabel
        label={<Typography sx={{ color:'black' }}>Account Price Visibility</Typography>  }
        control={ <Checkbox onChange={(event) => setPriceVisibilty(event.target.checked)} {..."label"} checked={priceVisibilty} />}/>
        <FormControlLabel
        label={<Typography sx={{ color:'black' }}>Primary account</Typography>  }
        control={ <Checkbox onChange={(event) =>{ setPrimary(event.target.checked); setSecondary(!event.target.checked)}} {..."label"}  checked={primary}/>}/>
        <FormControlLabel
        label={<Typography sx={{ color:'black' }}>Secondary account</Typography>  }
        control={ <Checkbox onChange={(event) =>{ setPrimary(!event.target.checked); setSecondary(event.target.checked)}} {..."label"} checked={secondary} />}/>
        <br/>
        <br/>
        <br/>
        <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
        <TextField
          id="outlined-number"
          label="Months for expiry"
          type="number"
          onChange={(event) => handleInputChange(event, setExpiry)}
          InputLabelProps={{
            shrink: true,
          }}
          size='small'
        />
        <TextField
          id="outlined-number"
          label="Price"
          type="number"
          size='small'
          onChange={(event) => handleInputChange(event, setPrice)}
          InputLabelProps={{
            shrink: true,
          }}
        />
       <div style={{  textAlign:'end',  paddingRight:'1rem',  }}><TextField
          id="outlined-number"
          label="No of Games"
          type="number"
          size='small'
          onChange={(event) => handleInputChange(event, setRange)}
          InputLabelProps={{
            shrink: true,
          }} 
        />
        <span style={{paddingLeft:'1.5rem'}}><Button variant="contained" onClick={DisplayRangeData}>GO</Button></span></div>
        </div>
        <br/>
        <div style={{  paddingTop:"1.5rem", paddingBottom:"1.5rem", color:'#435B66', width:'100%', textAlign:'center', opacity:'0.8'}}>ADD GAMES </div>
        {Array.from({ length: range }, (_, index) => (
        <ReaderGameColumn key={index} handleInputChanges={handleInputChange} data={game} setData={setGame} index={index}/>
      ))}
        <div style={{paddingTop:'1.5rem', paddingBottom:'1.5rem'}}><Button variant="contained" color='success'>Save</Button> <Button variant="contained" color='error'>Delete</Button></div>
    </div>
  )
}
