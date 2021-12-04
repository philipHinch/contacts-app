const Button = ({ buttonText, className, icon, setUserFormVisible, type }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('add-contact-btn')) {
            setUserFormVisible(true)
        } else if (e.target.classList.contains('close-btn')) {
            setUserFormVisible(false)
        }
    }

    return (

        <button className={className} type={type} onClick={(e) => handleClick(e)}>
            {buttonText}
            {icon}
        </button >

    );
}

export default Button;