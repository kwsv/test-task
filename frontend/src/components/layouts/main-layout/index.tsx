import { FC, PropsWithChildren } from 'react';
import logo from '@/assets/images/logo.png';
import rocket from '@/assets/images/rocket.png';
import css from './styles/style.module.css';
import { ColoredText } from '@UI';

interface ICololoredTitle {
    text: string;
    colored_text?: string;
}

interface IMainLayoutProps {
    title: ICololoredTitle;
    info: string;
}

export const MainLayout: FC<PropsWithChildren<IMainLayoutProps>> = ({ children, title, info }) => {
    return (
        <div className={css.block}>
            <div className={css.body}>
                <img className={css.logo} src={logo} alt='logo' />

                <h1 className={css.title}>
                    {title.text}
                    <br />

                    <ColoredText>
                        {title.colored_text}
                    </ColoredText>

                </h1>

                <span className={css.info}>
                    {info}
                </span>

                <div className={css.content}>
                    {children}
                </div>
            </div>

            <img src={rocket} className={css.rocket} />
        </div>
    );
};
