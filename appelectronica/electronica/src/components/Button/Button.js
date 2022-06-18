import './Button.css'

const Button = (props) => {
    return <button onClick={props.yukClick} >{props.label}</button>
}

export default Button