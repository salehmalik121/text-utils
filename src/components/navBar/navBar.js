import React from 'react'
import {Navbar , Container , Nav , Button } from 'react-bootstrap';
import {Switch } from '@mui/material';
import  PropTypes  from 'prop-types';
import './navBar.css';
function navBar({switchPressed , isDark , showAlert , setTheme}) {
    let theme;
   isDark? 
   theme = {nav : "navbar-dark bg-dark" , 
          btn : "outline-light" , 
          textstyle : {color : "white"} 
        } 
   : theme = {nav : "bg-primary" , 
            btn : "outline-dark" ,  
            textstyle : {color : "black"} 
        } ;
  return (
    <Navbar className = {theme.nav} expand="lg">
  <Container className =" ctn" fluid>
    <Navbar.Brand href="#home">Text Utils</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
    {isDark ? <Button className = "btn-color btn-blue" onClick={()=>{setTheme("blue")}}></Button> : null}
    {isDark ? <Button className = "btn-color btn-red" onClick={()=>{setTheme("red")}}></Button> : null}
    {isDark ? <Button className = "btn-color btn-green" onClick={()=>{setTheme("green")}}></Button> : null}
    {isDark ? <Button className = "btn-color btn-black" onClick={()=>{setTheme("black")}}></Button> : null}

    <Switch 
    className = "ms-1"
    sx={
        { 
            "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track" : {
                backgroundColor : 'orange', 
                opacity : 0.75,   
            },
            "& .MuiSwitch-switchBase.Mui-checked" : {
                color : 'orange'
            }
            
        }            
    }
    onChange={(theme)=>{
        switchPressed(theme.target.checked);
        isDark ? showAlert("Light Mode is Turned on " , "success") : showAlert("Dark Mode is Turned on " , "success");
    }}
    /> 
    <div style = {theme.textstyle}>
    Dark Mode
    </div>
  </Container>
</Navbar>
  )
}
navBar.propTypes={
    isDark : PropTypes.bool,
}
export default navBar