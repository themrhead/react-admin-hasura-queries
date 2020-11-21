import gql from 'graphql-tag';

// Only the extra fields for the query.
export const GET_LIST_USERS_EXTENSION = gql`
  {
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
