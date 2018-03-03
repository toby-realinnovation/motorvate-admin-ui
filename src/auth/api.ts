import * as AWS from 'aws-sdk';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { getUserPool } from '../common';

export const authenticate = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    });
    const userPool = getUserPool();
    const cognitoUser = new CognitoUser({ Username: username, Pool: userPool });
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        AWS.config.region = process.env.REACT_APP_AWS_REGION || '';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID || '',
          Logins: {
            [`cognito-idp.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${
              process.env.REACT_APP_USER_POOL_ID
            }`]: result.getIdToken().getJwtToken()
          }
        });
        const credentials = AWS.config.credentials as AWS.Credentials;
        credentials.refresh(error => {
          if (error) {
            reject(error);
          }
          resolve();
        });
      },
      onFailure: err => reject(err)
    });
  });
};
