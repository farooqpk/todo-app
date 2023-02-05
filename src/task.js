
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Task = (props) => {
    return (<>
        <div className='outputAllDiv'>

           
           {props.compStatus ? <Checkbox disabled checked onClick={() => { props.completeTask(props.id) }}  icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>} /> : <Checkbox onClick={() => {props.completeTask(props.id)}} icon={<RadioButtonUncheckedIcon/>} />}

            <p className='outputPara' style={{ textDecoration: props.compStatus ? 'line-through' : null }}>{props.taskName}</p>

            <IconButton aria-label="delete" style={{ color: "#f50057" }} onClick={() => { props.removeTask(props.id) }}> <DeleteIcon /> </IconButton>

        </div>
    </>)
}


