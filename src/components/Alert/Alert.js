import React from 'react'
import {Alert} from 'react-bootstrap';
function AlertCom(props) {
    console.log(props.variant);
     return (
    <Alert  variant={props.variant}>
          {props.msg}
    </Alert>
  )
}

export default AlertCom