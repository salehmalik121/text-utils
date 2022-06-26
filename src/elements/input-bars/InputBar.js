import React  from 'react'
import {Col , Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
function InputBar({placeholder , readOnly , valueChange , value , color}) {
  return (
    <Col>
        <div className = "Head-text"></div>
        <Form.Control
        className = {color.backgroundColor}
          onChange={(value)=>{
            valueChange(value);
          }}
          as = "textarea"
          value = {value}
          placeholder= {placeholder}
          readOnly = {readOnly}
          rows={5}
          style = {{color : color.tColor , backgroundColor : color.backgroundColor }}
        />
      </Col>
  )
}
InputBar.propTypes = {
    placeholder : PropTypes.string.isRequired,
    readOnly : PropTypes.bool,
    value : PropTypes.string
}
InputBar.defaultProps={
    readOnly:false,
}
export default InputBar