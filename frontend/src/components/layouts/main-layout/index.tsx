import { FC, PropsWithChildren, ReactNode } from "react"
import logo from '@/assets/images/logo.png'
import rocket from '@/assets/images/rocket.png'
import css from './styles/style.module.css'

interface IMainLayoutProps {
    title: ReactNode
    info: string
}

export const MainLayout: FC<PropsWithChildren<IMainLayoutProps>> = ({ children, title, info }) => {
    return (
        <div className={css.block}>
            <div className={css.body}>
                <img className={css.logo} src={logo} alt="logo" />
                <h1 className={css.title}>{title}</h1>
                <span className={css.info}>{info}</span>
                <div className={css.content}>{children}</div>
            </div>
            <img src={rocket} className={css.rocket} />
        </div>
    )
}
