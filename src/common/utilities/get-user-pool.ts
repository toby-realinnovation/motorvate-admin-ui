import { CognitoUserPool } from 'amazon-cognito-identity-js';

export const getUserPool = (): CognitoUserPool => {
  return new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_USER_POOL_ID || '',
    ClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID || ''
  });
};
