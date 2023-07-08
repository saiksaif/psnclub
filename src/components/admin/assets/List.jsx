
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';
import IconButton from '@mui/material/IconButton/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Lists({onClick}) {
  
  return (
    <>
    <List button onClick={onClick} sx={{ width: '100%', overflow:'auto', color:'black', maxWidth: 360, bgcolor: 'background.paper', cursor:'pointer', '&:hover': {
      backgroundColor: '#f5f5f5', // Change the background color on hover
    }, }}>
      <ListItem  alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
        {/* <IconButton aria-label="delete" color='error'>
          <DeleteIcon />
        </IconButton> */}
      </ListItem>
    </List>
    
  </>
  );
}
