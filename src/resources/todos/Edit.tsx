import React from 'react';
import {
  Edit,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  SimpleForm,
  TextInput,
  TopToolbar,
  ListButton,
} from 'react-admin';

const TodoTitle = ({ record }: { record?: { title: string } }) => {
  return <span>Todo: {record ? `${record.title}` : ''}</span>;
};

const TodoEditActions = ({
  basePath,
  data,
}: {
  basePath?: string;
  data?: object;
}) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} label="Back" />
  </TopToolbar>
);

export const TodosEdit = (props: object) => (
  <Edit title={<TodoTitle />} actions={<TodoEditActions />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" label="Todo Id" />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="users"
        allowEmpty
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <BooleanInput source="is_completed" label="Is Completed?" />
    </SimpleForm>
  </Edit>
);

export default TodosEdit;
