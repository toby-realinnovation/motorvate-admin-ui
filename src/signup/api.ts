import { Registrant } from './models';
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { getUserPool } from '../common';

export const register = (
  email: string,
  birthdate: string,
  gender: string,
  name: string,
  phoneNumber: string,
  password: string
): Promise<Registrant> => {
  return new Promise((resolve, reject) => {
    const userPool = getUserPool();
    const attributes = [] as CognitoUserAttribute[];
    attributes.push(
      new CognitoUserAttribute({ Name: 'birthdate', Value: birthdate || '' })
    );
    attributes.push(
      new CognitoUserAttribute({ Name: 'email', Value: email || '' })
    );
    attributes.push(
      new CognitoUserAttribute({ Name: 'gender', Value: gender || '' })
    );
    attributes.push(
      new CognitoUserAttribute({ Name: 'name', Value: name || '' })
    );
    attributes.push(
      new CognitoUserAttribute({
        Name: 'phone_number',
        Value: phoneNumber || ''
      })
    );
    userPool.signUp(email, password, attributes, [], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export const confirmRegistration = (username: string, code: string) => {
  return new Promise((resolve, reject) => {
    const userPool = getUserPool();
    const cognitoUser = new CognitoUser({ Username: username, Pool: userPool });
    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export const resendConfirmationCode = (username: string) => {
  return new Promise((resolve, reject) => {
    const userPool = getUserPool();
    const cognitoUser = new CognitoUser({ Username: username, Pool: userPool });
    cognitoUser.resendConfirmationCode((err, result) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
