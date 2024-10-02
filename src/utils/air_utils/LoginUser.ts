import { sha256 } from "../crypto/sha256";
import { User } from "./CreateUser";
import { getAirTableSecrets } from "./Secrets";
export enum LoginErrors {
    Failed = 'Failed to validate user',
    Network = 'Network error'
}

export async function loginUser(email: string, password: string): Promise<string> {
    const { apiurl, baseId, pat, authTableId } = getAirTableSecrets();
    const hashedPassword = await sha256(password);
    const encodedFormula = encodeURI(`IF(AND({password_hash}="${hashedPassword}",{email}="${email}"),1,0)`)
    let res: Response | undefined;
    try {
        res = await fetch(`${apiurl}/${baseId}/${authTableId}?filterByFormula=${encodedFormula}`, {
            headers: {
                "Authorization": `Bearer ${pat}`
            }
        });
    } catch (e) {
        throw new Error(LoginErrors.Network);
    }
    if (res.status === 200) {
        const resJson = await res.json() as {
            records: {
                id: string
                fields: User
            }[]
        };
        if (resJson.records.length == 1) {
            return hashedPassword;
        } else {
            throw new Error(LoginErrors.Failed);
        }
    } else {
        throw new Error(LoginErrors.Failed);
    }
}


export async function validateToken(token: string) {
    const { apiurl, baseId, pat, authTableId } = getAirTableSecrets();
    const encodedFormula = encodeURI(`{password_hash}="${token}"`)
    let res: Response | undefined;
    try {
        res = await fetch(`${apiurl}/${baseId}/${authTableId}?filterByFormula=${encodedFormula}`, {
            headers: {
                "Authorization": `Bearer ${pat}`
            }
        });
    } catch (e) {
        throw new Error(LoginErrors.Network);
    }
    if (res.status === 200) {
        const resJson = await res.json() as {
            records: {
                id: string
                fields: User
            }[]
        };
        if (resJson.records.length == 1) {
            return true;
        } else {
            throw new Error(LoginErrors.Failed);
        }
    } else {
        throw new Error(LoginErrors.Failed);
    }
}