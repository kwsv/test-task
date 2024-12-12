
export interface IBaseMessengerProps extends IMessengerProps {
    image: string
    className?: string
}

export interface IMessengerProps {
    onClick?: () => void
    url: string
}