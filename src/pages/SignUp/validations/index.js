import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
    firstName: Yup.string()
    .required("Обязательно для заполнения")
    .min(2, "Минимум 2 символа")
    .max(25, "Не более 25 символов"),
    lastName: Yup.string()
    .required("Обязательно для заполнения")
    .min(2, "Минимум 2 символа")
    .max(25, "Не более 25 символов"),
    email: Yup.string()
    .email("Неверно указан email")
    .required("Обязательно для заполнения"),
    gender: Yup.string()
    .required("Обязательно для заполнения"),
    password: Yup.string()
    .required("Обязательно для заполнения")
    .min(8, "Минимум 8 символов"),
    confirmPassword: Yup.string()
    .required("Обязательно для заполнения")
    .oneOf([Yup.ref('password'), null], "Пароль должен совпадать"),
    phone: Yup.string()
    .required("Обязательно для заполнения")
    .min(5, "Минимум 5 символов").max(15, "Максимум 15 символов"),

});