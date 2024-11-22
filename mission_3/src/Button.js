const Button = (props) => {

    const onClickButton = () => {
        console.log(props.text);
    };

    return (
        <button 
            onClick={onClickButton}
        >
            {props.text}
        </button>
    );
}

export default Button;