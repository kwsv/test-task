import { FC } from 'react';
import { MainLayout } from '@components';
import { Button } from '@UI';
import { ParticipationForm } from '@modules/participation-form';
import { useLocation, useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = localStorage.getItem('user_id');

    if (!location.state && !userId) {
        return (
            <MainLayout title={{ text: 'все круто! теперь', colored_text: 'выигрывай путешествие' }} info='Чтобы участвовать в  розыгрыше путешествия, оставь актуальную почту и поделись с друзьями'>
                <ParticipationForm />
            </MainLayout>
        );
    } else {
        return (
            <MainLayout title={{ text: 'класс! теперь ты', colored_text: 'участвуешь в конкурсе' }} info='Ты прошел все наши карты, но ты всегда можешь вызвать inDriver по-настоящему, для этого переходи по ссылке!'>
                <div style={{ marginTop: 65 }}>
                    <Button onClick={
                        () => {
                            localStorage.removeItem('user_id');
                            navigate('/', { state: null });
                        }
                    }
                    >
                        Пройти игру заново
                    </Button>
                </div>

            </MainLayout>
        );
    }
};
