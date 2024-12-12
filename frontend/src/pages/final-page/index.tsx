import { MainLayout } from "@/components"
import { Button, ColoredText } from "@UI"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

export const FinalPage: FC = () => {

    const navigate = useNavigate()
    return (
        <MainLayout title={['класс! теперь ты', <br />, <ColoredText>участвуешь в конкурсе</ColoredText>]} info='Ты прошел все наши карты, но ты всегда можешь вызвать inDriver по-настоящему, для этого переходи по ссылке!'>
            <Button onClick={
                () => {
                    localStorage.removeItem('user_id')
                    navigate('/')
                }
            }>Пройти игру заново</Button>
        </MainLayout>
    )
}