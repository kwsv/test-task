import * as Yup from 'yup';

export const emailFormValidationSchema = Yup.object().shape({
    email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Неверный формат почты').required('Неверный формат почты'),
});

export const sharedFormValidationSchema = Yup.object().shape({
    shared: Yup.boolean().isTrue('Надо все же поделиться'),
});
