import { FC } from 'react'
import css from './style/style.module.css'
import { messengers } from './config'

interface IMessengerBlockProps {
    onShare: () => void
}



export const MessengersBlock: FC<IMessengerBlockProps> = ({ onShare }) => {
    return (
        <div className={css.block}>
            {messengers.map(({ element: Messenger, props }, index) => <Messenger key={index} onShare={onShare} {...props} />)}
        </div>
    )
}