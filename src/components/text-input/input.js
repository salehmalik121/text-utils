import React , {useState} from 'react'
import {Row } from 'react-bootstrap';
import InputBar from '../../elements/input-bars/InputBar';
import Button from '../../elements/Buttons/Button'
import PropTypes  from 'prop-types';
import LengthBar from '../../elements/LengthBar/LengthBar';
function toUpper(value){
    let newValue =  value.toUpperCase();
    return newValue;
}
function toLower(value){
    let newValue = value.toLowerCase();
    return newValue;
}
function Input({isDark , showAlert , theme}) {  
    console.log(theme);
let [Value , setValue] = useState("");
let [processed , setProcessed] = useState("");  
let styleObj;
isDark ?
    styleObj = {
        inputLengthColor : {
            dim : theme.dim,
            solid : theme.solid,
            tColor : theme.tColor
        },
        input : {
            backgroundColor : theme.inputBox,
            tColor : theme.tColor
        },
        btn : {
            color : theme.btn
        }
    } 
    :styleObj = {
         inputLengthColor : {
            dim : "#c8f1c8",
            solid : "green",
            tColor : "black"
        },
        input : {
            backgroundColor : "bg-light",
            tColor : "black"
        },
        btn :  {
            color : "orange"
        }
    };
  return (
    <div>
        <Row>
            <InputBar 
                placeholder={"Enter Text"} 
                value={Value}
                valueChange={(value)=>{
                    setValue(value.target.value);
                }} 
                color = {styleObj.input}
            />
            <InputBar 
                placeholder={"Changed Text"} 
                readOnly = {true} 
                value={processed} 
                color = {styleObj.input}
            />
        </Row>
        <div>
           <Button 
                text={"Change to upperCase"} 
                pressed={()=>{
                    setProcessed(toUpper(Value));
                    showAlert("Changed to Upper Case" , "success");
                }}
                colorObj = {styleObj.btn}
                isDark = {isDark}
          />
           <Button 
                text = {"Change To Lower Case"} 
                pressed={()=>{
                    setProcessed(toLower(Value));
                    showAlert("Changed to Lower Case" , "success");
                }}
                colorObj = {styleObj.btn}
                isDark = {isDark}
           />
           
           <Button 
                text = {"Copy"} 
                pressed={()=>{
                    navigator.clipboard.writeText(processed);
                    showAlert("Copied To Clipboard" , "success");
                }}
                colorObj = {styleObj.btn}
                isDark = {isDark}
           />
           <Button 
                text = {"Clear"} 
                variant={"danger"}
                pressed={()=>{
                    setValue("");
                    setProcessed("");
                    showAlert("Text Cleared" , "warning");
                }}
                
           />
        </div>
            <LengthBar Value={Value.length} colorBool={styleObj.inputLengthColor} />
    </div>
    
  )
}
toUpper.propTypes={
    value: PropTypes.string,
}
Input.propTypes = {
    isDark : PropTypes.bool,
}
export default Input