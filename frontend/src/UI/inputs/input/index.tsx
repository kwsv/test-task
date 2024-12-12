import { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import css from './style/style.module.css'


const cx = classNames.bind(css)

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error: string,
    touched: boolean
}

export const Input: FC<IInputProps> = ({ error, touched, ...props }) => {
    return (
        <div className={cx('block', { hasError: error && touched })}>
            <div className={css.border}>
                <input className={css.input} {...props} />
            </div>
            <span className={css.error}>{touched ? error : ''}</span>
        </div>

    )
}