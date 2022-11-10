export const COLUMN_DATA = [
  {
    header: '',
    accessor: 'id',
    editable: false,
    footer: true,
  },
  {
    header: 'First Name',
    accessor: 'first_name',
    editable: false,
  },
  {
    header: 'Last Name',
    accessor: 'last_name',
    editable: false,
  },
  {
    header: 'Email',
    accessor: 'email',
    editable: true,
  },
  {
    header: 'Date of Birth',
    accessor: 'date_of_birth',
    editable: false,
  },
  {
    header: 'Country',
    accessor: 'country',
    editable: true,
  },
  {
    header: 'Phone',
    accessor: 'phone',
    editable: true,
  },
];

export interface IPerson {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  country: string;
  phone: string;
}
