import { buildFields } from 'ra-data-hasura-graphql';
import { GET_LIST } from 'react-admin';
import { ResourceType, FetchType } from 'ra-data-hasura-graphql';

import { GET_LIST_USERS_EXTENSION } from './queries/users';

/**
 * Extracts just the fields from a GraphQL AST.
 * @param {GraphQL AST} queryAst
 */
const extractFieldsFromQuery = (queryAst: any) =>
  queryAst.definitions[0].selectionSet.selections;

// Function which extends queries for resources/fetchTypes if extensions have been defined.
const customBuildFields = (type: ResourceType, fetchType: FetchType) => {
  const resourceName: string = type.name;

  // Default fields for query.
  const queryFields = buildFields(type, fetchType);

  // We've provided extended fields for users GET_LIST query.
  if (resourceName === 'users' && fetchType === GET_LIST) {
    const extendedFields = extractFieldsFromQuery(GET_LIST_USERS_EXTENSION);
    queryFields.push(...extendedFields);
  }

  return queryFields;
};

export default customBuildFields;
