import * as yup from 'yup';

export interface ErrorsProps {
  [k: string]: string;
};

const shape = {
  game: yup.string().required("Esse campo é obrigatório"),
  name: yup.string().required("Esse campo é obrigatório"),
  yearsPlaying: yup.string().required("Esse campo é obrigatório"),
  discord: yup.string().required("Esse campo é obrigatório"),
  weekDays: yup.array().min(1, "Esse campo é obrigatório")
};

export async function validationForm<T>(body: T) {
  try {
    const schema = yup.object().shape(shape);

    await schema.validate(body, { abortEarly: false });
  } catch(error) {
    if(error instanceof yup.ValidationError) {
      const errorsData: ErrorsProps = {};

      error.inner.forEach(error => {
        errorsData[error.path!] = error.message;
      });

      return errorsData;
    }
  }
}