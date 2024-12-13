import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';

export const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            {/* <Route path='/final' element={<FinalPage />} /> */}
        </Routes>
    );
};
