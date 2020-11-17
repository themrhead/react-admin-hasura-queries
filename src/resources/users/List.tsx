import React from 'react';
import {
  List,
  Filter,
  Datagrid,
  TextInput,
  TextField,
  FunctionField,
} from 'react-admin';

interface TodoFromUserQuery {
  id: number;
  title: string;
}

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
      <TextField
        label="pending todos"
        source="pending_todos_count.aggregate.count"
      />
      <TextField
        label="total todos"
        source="total_todos_count.aggregate.count"
      />
      <FunctionField
        label="Oldest pending todo"
        render={({ todos }: { todos: TodoFromUserQuery[] }) => {
          const latestTodo = todos?.[0];
          if (!latestTodo) return 'N/A';
          return <a href={`#/todos/${latestTodo.id}`}>{latestTodo.title}</a>;
        }}
      />
    </Datagrid>
  </List>
);

export default UsersList;
