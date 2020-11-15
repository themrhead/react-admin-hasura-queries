import React from 'react';
import App from './App';
import buildHasuraProvider from './dataprovider';

const GRAPHQL_URI = 'https://low-code-api.herokuapp.com/v1/graphql';

export default async function getApp() {
  const provider = await buildHasuraProvider({
    clientOptions: { uri: GRAPHQL_URI },
  });
  return () => <App dataProvider={provider} />;
}
