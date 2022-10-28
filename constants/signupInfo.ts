export const REGISTRATION_FIELDS = {
  name: {
    type: 'text',
    label: 'Username',
  },
  email: {
    type: 'email',
    label: 'Email',
  },
  password: {
    type: 'password',
    label: 'Password',
  },
};

export const REGISTRATION_INIT_STATE = {
  name: '',
  email: '',
  password: '',
};

export const LOGIN_FIELDS = [
  {
    type: 'email',
    label: 'Email',
  },
  {
    type: 'password',
    label: 'Password',
  },
];

export const LOGIN_INIT_STATE = {
  email: '',
  password: '',
};
