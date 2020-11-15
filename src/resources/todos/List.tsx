import React from 'react';
import {
  Filter,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  TextInput,
} from 'react-admin';

const TodoFilter = (props: object) => (
  <Filter {...props}>
    <TextInput label="Search by Title" source="title" alwaysOn />
    <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <BooleanInput source="is_completed" label="Completed?" allowEmpty />
  </Filter>
);

const TodoList = (props: object) => (
  <List filters={<TodoFilter />} bulkActionButtons={false} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="Todo Id" />
      <TextField source="title" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_completed" label="Completed?" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);

export default TodoList;
