import { useFormik } from "formik"

export interface IParticipationFormValues {
    email: string
    shared: boolean
}

export interface IFormik extends ReturnType<typeof useFormik> {}

export interface IChildFormProps {
    form: IFormik,
    number: number,
    disabled: boolean
}

