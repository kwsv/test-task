import * as Yup from 'yup';

export const emailFormValidationSchema = Yup.object().shape({
    email: Yup.string().matches(/^(?![0-9])([0-9aA-zZ]{2,}(?:\.?))+[0-9aA-zZ]+@[aA-zZ]{2,}\.[aA-zZ]{2,}$/, 'Неверный формат почты').required('Неверный формат почты'),
});

export const sharedFormValidationSchema = Yup.object().shape({
    shared: Yup.boolean().isTrue('Надо все же поделиться')
});
