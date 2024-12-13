import { Form, MessengersBlock } from '@components';
import { Button } from '@UI';
import { FC } from 'react';
import { IChildFormProps } from '../types/form';
import css from './styles/shared-form.module.css';

export const ShareForm: FC<IChildFormProps> = ({ number, form, ...props }) => {
    return (
        <Form tag={String(number)} title='Поделись с друзьями' onSubmit={form.handleSubmit} {...props}>
            <div className={css.messengers}>
                <MessengersBlock onShare={() => form.setFieldValue('shared', true)} />
            </div>

            <span className={css.error}>
                {form.touched.shared ? form.errors.shared as string : ''}
            </span>

            <Button type='submit'>
                Я поделился
            </Button>
        </Form>
    );
};
