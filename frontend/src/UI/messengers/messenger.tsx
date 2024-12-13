import { FC } from 'react';
import css from './style.module.css';
import classNames from 'classnames';
import { IBaseMessengerProps } from './types';

export const BaseMessenger: FC<IBaseMessengerProps> = ({ image, className, url, onShare }) => {
    return (
        <a
            href={url}
            target='_blank'
            onClick={onShare}
            onAuxClick={(event) => {
                if (event.button === 1) {
                    onShare?.();
                }
            }}
            className={classNames(css.block, className)}
        >
            <img src={image} />
        </a>
    );
};
