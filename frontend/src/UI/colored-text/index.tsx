import { FC, PropsWithChildren } from 'react';
import css from './style/style.module.css';

export const ColoredText: FC<PropsWithChildren> = ({ children }) => {
    return (
        <span className={css.block}>
            {children}
        </span>
    );
};
