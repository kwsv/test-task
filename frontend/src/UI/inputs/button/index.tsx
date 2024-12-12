import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import css from './style/style.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, ...props }) => {
    return (
        <button className={css.block} {...props}>
            {children}
        </button>
    )
}