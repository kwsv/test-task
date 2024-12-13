export interface IBaseMessengerProps extends IMessengerProps {
    image: string;
    className?: string;
}

export interface IMessengerProps {
    onShare?: () => void;
    url: string;
}
