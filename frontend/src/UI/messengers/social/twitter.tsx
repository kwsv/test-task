import { FC } from 'react'
import { BaseMessenger } from '../messenger'
import { IMessengerProps } from '../types'
import twitter from '@/assets/icons/twitter.png'
import css from './style/style.module.css'


export const Twitter: FC<IMessengerProps> = ({ ...props }) => {
    return (
        <BaseMessenger image={twitter} className={css.twitter} {...props} />
    )
}