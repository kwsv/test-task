import { FC, useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { EmailForm } from './components/email-form';
import { ShareForm } from './components/share-form';
import { checkUnregisteredUser, registerUser } from './api';
import { emailValidation } from './validation';
import css from './styles/style.module.css'


interface IParticipationFormProps {

}



export const ParticipationForm: FC<IParticipationFormProps> = ({ }) => {

    const navigate = useNavigate()

    const emailForm = useFormik({
        initialValues: {
            email: '',
        },
        validateOnChange: true,
        validate: (values) => {
            const errors: Partial<Record<keyof typeof values, string>> = {}
            if (!values.email || emailValidation(values.email)) {
                errors.email = 'Неверный формат почты'
            }
            return errors
        },
        onSubmit: ({ email }, { setFieldError }) => {
            checkUnregisteredUser(email)
                .then(
                    (response) => {
                        if (response.data.status) {
                            setStage((s) => s + 1)
                        }
                        else {
                            setFieldError('email', response.data.message)
                        }
                    }
                )
                .catch((response) => {
                    setFieldError('email', response.response.data?.detail?.[0]?.ctx?.reason)
                })
        },
    });

    const sharedForm = useFormik({
        initialValues: {
            shared: false,
        },
        validateOnChange: true,
        validate: (values) => {

            const errors: Partial<Record<keyof typeof values, string>> = {}
            if (!values.shared) {
                errors.shared = 'Надо все же поделиться'
            }
            return errors
        },
        
        onSubmit: () => {
            registerUser(emailForm.values.email)
                .then((response) => {
                    localStorage.setItem('user_id', response.data.id)
                    navigate('/', { state: true })
                })
        },
    });


    const stages = [
        { element: EmailForm, form: emailForm },
        { element: ShareForm, form: sharedForm }
    ]

    const [stage, setStage] = useState<number>(2)


    return (
        <div className={css.block}>
            {stages.map(({ element: Form, form }, index) =>
                <Form
                    key={index}
                    number={index + 1}
                    form={form}
                    disabled={stage - 1 !== index}
                />
            )}
        </div>

    )
}