import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { EmailForm } from './components/email-form';
import { ShareForm } from './components/share-form';
import { checkUnregisteredUser, registerUser } from './api';
import { emailFormValidationSchema, sharedFormValidationSchema } from './validation';
import css from './styles/style.module.css';
import { useAppDispatch, login } from '@/store';

interface IParticipationFormProps {

}

export const ParticipationForm: FC<IParticipationFormProps> = ({ }) => {
    const dispatch = useAppDispatch();

    const emailForm = useFormik({
        initialValues: {
            email: '',
        },
        validateOnChange: true,
        validationSchema: emailFormValidationSchema,
        onSubmit: ({ email }, { setFieldError, setErrors }) => {
            checkUnregisteredUser(email)
                .then((response) => {
                    if (response.data.status) {
                        setStage((stage) => stage + 1);
                    } else {
                        setFieldError('email', response.data.message);
                    }
                })
                .catch((response) => {
                    setErrors(response?.response?.data?.errors ?? {});
                });
        },
    });

    const sharedForm = useFormik({
        initialValues: {
            shared: false,
        },
        validationSchema: sharedFormValidationSchema,
        onSubmit: () => {
            registerUser(emailForm.values.email)
                .then((response) => {
                    dispatch(login(response.data.id));
                })
                .catch(() => {

                });
        },
    });

    const stages = [
        { element: EmailForm, form: emailForm },
        { element: ShareForm, form: sharedForm },
    ];

    const [stage, setStage] = useState<number>(1);

    return (
        <div className={css.block}>
            {stages.map(({ element: Form, form }, index) => (
                <Form
                    key={index}
                    number={index + 1}
                    form={form}
                    disabled={stage - 1 !== index}
                />
            ))}
        </div>

    );
};
