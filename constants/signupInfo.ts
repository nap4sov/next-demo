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

export const SIGNIN_OPTIONS = [
  {
    label: 'Sign in with Google',
    path: '/google.png',
    provider: 'google',
  },
  {
    label: 'Sign in with Facebook',
    path: '/facebook.png',
    provider: 'facebook',
  },
  {
    label: 'Sign in with GitHub',
    path: '/github.png',
    provider: 'github',
  },
];
