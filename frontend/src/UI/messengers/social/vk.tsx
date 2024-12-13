import { FC } from 'react';
import { BaseMessenger } from '../messenger';
import { IMessengerProps } from '../types';
import vk from '@/assets/icons/vk.png';
import css from './style/style.module.css';

export const Vk: FC<IMessengerProps> = ({ ...props }) => {
    return (
        <BaseMessenger image={vk} className={css.vk} {...props} />
    );
};
