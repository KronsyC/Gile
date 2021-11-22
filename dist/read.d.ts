/**
 * Read a Tokens Paylad without verifying the signature, returns undefined if the JWT is invalid
 *
 *
 */
declare function read(token: string): object;
export default read;
