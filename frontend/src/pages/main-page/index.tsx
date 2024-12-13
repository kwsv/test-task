import { FC } from 'react';
import { MainLayout } from '@components';
import { Button } from '@UI';
import { ParticipationForm } from '@modules/participation-form';
import { useAppSelector, useAppDispatch, logout } from '@/store';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const isRegistered = useAppSelector((state) => state.user.isRegistered);

    if (!isRegistered) {
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
                            dispatch(logout());
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
