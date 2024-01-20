const Button = ({ icon, text, classs, disabled, type, onClick }) => {
    return (
        <button 
            type={type} 
            className='${classs}' 
            disabled={disabled}
            onClick={onClick}
            >
           {icon ? icon: text ? text:""}
        </button>
    )
  }
  
  export default Button