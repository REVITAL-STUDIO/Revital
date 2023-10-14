"use client"
import "./button.css"
interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({label}) => {


    return (
        <button className="menu-btn">
            {label}
        </button>
    )
}

export default Button;