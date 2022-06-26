import './App.css';
import NavBar from './components/navBar/navBar';
import { Container} from 'react-bootstrap';
import Input from './components/text-input/input';
import {useState , useReducer} from 'react';
import Alert from './components/Alert/Alert'
function reducer (stateTheme , themeSelector){
  switch(themeSelector){
    case "white" : 
    return {
      bgColor : "white" , varient : "primary" , dim : " " , solid : " " , btn : " " , tColor: "black" , inputBox : "bg-light" 
    } ;
    case "black" : 
    return {
      bgColor : "rgb(0, 0, 0)" , varient : "primary" , dim : "#f8deae" , solid : "orange" , btn : "orange"  , tColor : "white" , inputBox : "bg-dark"
    } ;
    case "blue" : 
    return {
      bgColor : "rgb(47, 47, 117)" , varient : "primary" , dim : "#f8deae" , solid : "#1b1b42" , btn : "#1b1b42" , tColor:"white" , inputBox : "#1b1b42"
    } ;
    case "red" : 
    return {
      bgColor : "rgb(107, 30, 30)" , varient : "primary" , dim : "#f8deae" , solid : "#430101" , btn : "#430101" ,tColor:"white" , inputBox : "#430101"
    };
    case "green" : 
    return {
      bgColor : "rgb(31, 73, 31)" , varient : "primary" , dim : "#f8deae" , solid : "#022f02", btn : "#022f02" ,tColor:"white" , inputBox : "#022f02"
    };
    default :
    console.log('ERROR');
  }
}
function App() {
  const [Darkmode , setDarkMode] = useState(false);
  const [alert , setAlert] = useState(null);
  const [stateTheme , dispatch] = useReducer(reducer , {  bgColor : "white" , varient : "primary" , dim : " " , solid : " " , btn : " " , tColor: "black" , inputBox : "bg-light" });
  let bcolor;
  bcolor = "#101111";
  if(Darkmode){
    bcolor = stateTheme.bgColor;
  }
  else{
    bcolor = "white";
  }
  const showAlert = (msg , variant)=>{
    setAlert({
      msg : msg,
      variant : variant
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div className="App" style={{backgroundColor: bcolor }}>
      <NavBar switchPressed={(value)=>{
        value? dispatch("black") : dispatch("white");
        setDarkMode(value);
      }} 
      isDark = {Darkmode}
      showAlert = {(msg , variant)=> {showAlert(msg , variant)}}
      setTheme = {(value)=>{dispatch(value)}}
      /> 
     { alert && <Alert variant = {alert.variant} msg = {alert.msg} /> }
     <Container className = "ctn-main" >
      <Input isDark = {Darkmode} showAlert = {(msg , variant)=> {showAlert(msg , variant)}} theme = {stateTheme} />
     </Container>
     <Container className = "coverUp">
     </Container>
    </div>
  );
}

export default App;
