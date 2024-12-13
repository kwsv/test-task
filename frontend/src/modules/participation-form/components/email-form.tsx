import { Form } from '@components';
import { Input, Button } from '@UI';
import { FC } from 'react';
import { IChildFormProps } from '../types/form';

export const EmailForm: FC<IChildFormProps> = ({ number, form, ...props }) => {
    return (
        <Form
            tag={String(number)}
            onSubmit={form.handleSubmit}
            title='Оставь актуальный email'
            {...props}
        >
            <Input
                touched={form.touched.email as boolean}
                error={form.errors.email as string}
                value={form.values.email}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                name='email'
                placeholder='Ввести email'
            />

            <Button type='submit'>
                Я оставил
            </Button>
        </Form>
    );
};
