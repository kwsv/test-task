import { FC } from 'react';
import { BaseMessenger } from '../messenger';
import { IMessengerProps } from '../types';
import facebook from '@/assets/icons/facebook.png';
import css from './style/style.module.css';

export const Facebook: FC<IMessengerProps> = ({ ...props }) => {
    return (
        <BaseMessenger image={facebook} className={css.facebook} {...props} />
    );
};
