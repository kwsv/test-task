import { FC } from 'react'
import css from './style.module.css'
import classNames from 'classnames'
import { IBaseMessengerProps } from './types'





export const BaseMessenger: FC<IBaseMessengerProps> = ({ image, className, url, onClick }) => {
    return (
        <a href={url} target="_blank" onClick={onClick} className={classNames(css.block, className)}>
            <img src={image} />
        </a>
    )
}