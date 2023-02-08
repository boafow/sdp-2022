import { CognitoIdentityClient, CognitoIdentityClientConfig } from '@aws-sdk/client-cognito-identity';
/**
 * Returns a CognitoIdentityClient with middleware
 * @param {CognitoIdentityClientConfig} config
 * @return {CognitoIdentityClient}
 */
export declare function createCognitoIdentityClient(config: CognitoIdentityClientConfig): CognitoIdentityClient;
export declare function middlewareArgs(args: {
    request: any;
    input: any;
}): {
    request: any;
    input: any;
};
