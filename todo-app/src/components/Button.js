const Button = ({type, text, action}) => {
    return (
      <div>
        <button type={type} onClick={action}>{text}</button>
      </div>
    )
  }
  
  export default Button
  