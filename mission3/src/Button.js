function Button(){
    function click(){
        return window.alert("안녕하세요!")
    }

    const buttonStyle = {
        fontsize: '100px',
        padding: '25%',
        background: 'blue',
        color: 'white'
    }

    return <button onClick={click} style={buttonStyle}>눌러주세요</button>
}

export default Button