import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationMode } from 'react-hook-form';

export const POST_FIELDS = [
  {
    type: 'title',
    label: 'Title',
  },
  {
    type: 'description',
    label: 'Description',
  },
  {
    type: 'fullText',
    label: 'Full Text',
  },
];

export interface IInputs {
  title: string;
  description: string;
  fullText: string;
  postedBy?: string;
}

export const defaultValues = {
  title: '',
  description: '',
  fullText: '',
};

export const schema = yup.object().shape({
  title: yup.string().min(5).required(),
  description: yup.string().required(),
  fullText: yup.string().min(20).required(),
});

export const config = {
  mode: 'onBlur' as keyof ValidationMode,
  reValidateMode: 'onChange' as 'onChange' | 'onBlur' | 'onSubmit' | undefined,
  defaultValues,
  resolver: yupResolver(schema),
};
