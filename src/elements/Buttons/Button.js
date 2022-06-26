import React from 'react'
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types'
function funButton({variant , text ,  pressed , colorObj , isDark}) {
    let styleSheet  ;

    isDark ? styleSheet = {
        backgroundColor : colorObj.color,
        borderColor : colorObj.color
    } : styleSheet = {};
    console.log(styleSheet);
  return (
    <Button variant={variant} className="mt-2 me-2" 
    style = {styleSheet}
    onClick={
        pressed
    }>
        {text}
    </Button>
  )
}
funButton.propTypes={
    variant : PropTypes.string,
    text : PropTypes.string
}
funButton.defaultProps={
variant: "primary",
text : "Enter Text"
}
export default funButton