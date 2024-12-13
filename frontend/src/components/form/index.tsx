import { FC, FormHTMLAttributes, PropsWithChildren } from 'react';
import css from './style/style.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(css);

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    tag: string;
    title: string;
    disabled?: boolean;
}

export const Form: FC<PropsWithChildren<IFormProps>> = ({ tag, title, children, disabled = false, ...props }) => {
    return (
        <form {...props} className={cx('block', { disabled: disabled })}>
            <div className={css.main}>
                <div className={css.header}>
                    <span className={css.tag}>
                        {tag}
                    </span>

                    <span className={css.title}>
                        {title}
                    </span>
                </div>

                <div className={css.body}>
                    {children}
                </div>
            </div>
        </form>
    );
};
