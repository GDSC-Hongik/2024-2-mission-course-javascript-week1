function Button(word){
    function text(){
        console.log(word.text)
    }
    return <button onClick={text}>{word.text}</button>
}

export default Button;