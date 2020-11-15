import React from 'react';
import { Admin, Resource } from 'react-admin';
import {
  TodosList,
  TodosCreate,
  TodosEdit,
  TodosIcon,
} from './resources/todos';
import { UsersList, UsersShow, UsersIcon } from './resources/users';

type AppProps = {
  dataProvider: Function;
};

function App(props: AppProps) {
  return (
    <Admin dataProvider={props.dataProvider}>
      <Resource
        name="todos"
        icon={TodosIcon}
        list={TodosList}
        create={TodosCreate}
        edit={TodosEdit}
      />
      <Resource
        name="users"
        icon={UsersIcon}
        list={UsersList}
        show={UsersShow}
      />
    </Admin>
  );
}

export default App;
