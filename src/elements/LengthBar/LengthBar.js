import React from 'react'
import { LinearProgress } from '@mui/material';
import {Container} from 'react-bootstrap';
import PropType from 'prop-types';
function LengthBar({Value , colorBool}) {
  return (
    <Container className = "mt-2">
        <div style = {{color : colorBool.tColor}}>
            Length : {Value}
        </div>
        <LinearProgress
        className = "mt-2"
        sx={{
            backgroundColor : colorBool.dim,
            "& .MuiLinearProgress-bar" : {
                backgroundColor : colorBool.solid,
            }
        }}
        variant="determinate" value={Value % 100} />
    </Container>
  )
}
LengthBar.PropType={
    Value: PropType.number,
}
export default LengthBar