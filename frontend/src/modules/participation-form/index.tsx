import { FC, useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { EmailForm } from './components/email-form';
import { ShareForm } from './components/share-form';
import { checkUnregisteredUser, registerUser } from './api';
import { emailFormValidationSchema, sharedFormValidationSchema } from './validation';
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
        validationSchema: emailFormValidationSchema,
        onSubmit: ({ email }, { setFieldError, setErrors }) => {
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
                    setErrors(response?.response?.data?.errors ?? {})
                })
        },
    });

    const sharedForm = useFormik({
        initialValues: {
            shared: false,
        },
        validationSchema: sharedFormValidationSchema,
        onSubmit: (values) => {
            registerUser(emailForm.values.email)
                .then((response) => {
                    localStorage.setItem('user_id', response.data.id)
                    navigate('/', { state: true })
                })
                .catch(() => {
                    
                })
        },
    });


    const stages = [
        { element: EmailForm, form: emailForm },
        { element: ShareForm, form: sharedForm }
    ]

    const [stage, setStage] = useState<number>(1)


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