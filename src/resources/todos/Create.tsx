import React from 'react';
import {
  Create,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const TodosCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <BooleanInput source="is_completed" label="Is Completed?" />
    </SimpleForm>
  </Create>
);

export default TodosCreate;
