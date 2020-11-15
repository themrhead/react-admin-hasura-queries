import React from 'react';
import {
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  TopToolbar,
  ListButton,
} from 'react-admin';

const UserTitle = ({ record }: { record?: { name: string } }) => {
  return <span>User: {record ? `${record.name}` : ''}</span>;
};

const UserShowActions = ({
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

export const UsersShow = (props: object) => (
  <Show title={<UserTitle />} actions={<UserShowActions />} {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="id" />
        <TextField source="name" />
        <DateField label="Created At" source="created_at" />
      </Tab>
      <Tab label="todos" path="todos">
        <ReferenceManyField reference="todos" target="user_id" addLabel={false}>
          <Datagrid rowClick="edit">
            <TextField source="id" label="Todo Id" />
            <TextField source="title" />
            <BooleanField source="is_completed" label="Completed?" />
            <DateField source="created_at" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default UsersShow;
