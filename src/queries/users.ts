import gql from 'graphql-tag';

export const GET_LIST_USERS = gql`
  {
    id
    name
    created_at
    todos(
      where: { is_completed: { _eq: false } }
      order_by: { created_at: asc }
    ) {
      id
      title
    }
    total_todos_count: todos_aggregate {
      aggregate {
        count
      }
    }
    pending_todos_count: todos_aggregate(
      where: { is_completed: { _eq: false } }
    ) {
      aggregate {
        count
      }
    }
  }
`;
