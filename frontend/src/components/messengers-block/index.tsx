import { FC } from 'react'
import css from './style/style.module.css'
import { messengers } from './config'

interface IMessengerBlockProps {
    onClick: () => void
}



export const MessengersBlock: FC<IMessengerBlockProps> = ({ onClick }) => {
    return (
        <div className={css.block}>
            {messengers.map(({ element: Messenger, props }, index) => <Messenger key={index} onClick={onClick} {...props} />)}
        </div>
    )
}