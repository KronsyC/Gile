interface Token{
    iss?: string;
    sub?: string;
    aud?: string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string | number;
    [x: string]: any 

}

export default Token