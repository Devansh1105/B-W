
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";

const MyComponent = () => {
  return (
    <a href="https://www.instagram.com/bhangandwhite?igsh=cnoycGhyenY0cjN3&utm_source=qr"><button style={buttonStyle}>
      <InstagramIcon style={iconStyle} />
    </button></a>
  );
};

const buttonStyle = {
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'black',
  border: 'none',
  padding: '10px',
  borderRadius: '50%',
  bottom:"6rem",
  cursor: "pointer"
  
};

const iconStyle = {
  fontSize: 60,
  color: 'white',
};

export default MyComponent;