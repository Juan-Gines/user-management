import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
  format: 'uuid',
  errorMessage: {
    type: 'El tipo de _id no es válido, debe ser un string.',
    format: 'El formato de _id no es válido, debe ser un uuid4.',
  },
});

export const nameDTOSchema = Type.String({
  minLength: 4,
  maxLength: 25,
  errorMessage: {
    minLength: 'El nombre debe tener como mínimo 4 caracteres de longitud.',
    maxLength: 'El nombre debe tener como máximo 25 caracteres de longitud.',
  },
});

export const surnameDTOSchema = Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage: {
    minLength: 'El apellido debe tener como mínimo 4 caracteres de longitud.',
    maxLength: 'El apellido debe tener como máximo 50 caracteres de longitud.',
  },
});

export const emailDTOSchema = Type.String({
  format: 'email',
  errorMessage: {
    type: 'El tipo de email no es válido, debe ser un string.',
    format: 'El formato de email no es válido, debe cumplir el RFC 5322.',
  },
});

export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 8,
  maxLength: 20,
  errorMessage: {
    type: 'El tipo del password no es válido, debe ser un string.',
    format:
      'El formato del password debe contener una mayúscula, una minúscula y un número al menos.',
    minLength: 'El password debe tener como mínimo 8 caracteres de longitud.',
    maxLength: 'El password debe tener como máximo 20 caracteres de longitud.',
  },
});
