import gql from 'graphql-tag';

export const GET_LIST_TODOS = gql`
  {
    id
    title
    user_id
    is_completed
  }
`;
