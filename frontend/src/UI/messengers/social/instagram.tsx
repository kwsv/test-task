import { FC } from 'react';
import { BaseMessenger } from '../messenger';
import { IMessengerProps } from '../types';
import instagram from '@/assets/icons/instagram.png';
import css from './style/style.module.css';

export const Instagram: FC<IMessengerProps> = ({ onShare: _, ...props }) => {
    return (
        <BaseMessenger image={instagram} className={css.instagram} {...props} />
    );
};
