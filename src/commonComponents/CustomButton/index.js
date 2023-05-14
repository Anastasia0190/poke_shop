import  PropTypes  from 'prop-types';
import Button from '@mui/material/Button';

import {styles} from "./styles"

const CustomButton = ({text, onClick, disabled = false, color = "blue"}) => {
    return <Button 
    disabled={disabled} 
    onClick={onClick} 
    variant="contained" 
    sx={styles(color)}
    >
    {text}
    </Button>;
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(["red", "green", "blue"]),
};

export default CustomButton;