import React from 'react';
import {
  List,
  Filter,
  Datagrid,
  TextInput,
  TextField,
  DateField,
} from 'react-admin';

const UserFilter = (props: object) => (
  <Filter {...props}>
    <TextInput label="Search by Name" source="name" alwaysOn />
  </Filter>
);

export const UsersList = (props: object) => (
  <List filters={<UserFilter />} bulkActionButtons={false} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="created_at" label="Created At" />
    </Datagrid>
  </List>
);

export default UsersList;
