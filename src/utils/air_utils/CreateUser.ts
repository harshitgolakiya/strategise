import { getAirTableSecrets } from "@/utils/air_utils/Secrets";
import { sha256 } from "@/utils/crypto/sha256"
export type User = {
    id: number;
    email: string;
    password: string;
    fullName: string;
}


export enum CreateErrors {
    UserExists = 'User already exists',
    Failed = 'Failed to create user',
    Network = 'Network error'
}

export async function createUser(email: string, password: string, fullName: string): Promise<number> {
    const { apiurl, authTableId: tableId, baseId, pat } = getAirTableSecrets();

    const hashedPassword = await sha256(password);
    const encodedFormula = encodeURI(`IF({email}="${email}",1,0)`)
    let validateRes: Response | undefined;
    try {
        validateRes = await fetch(`${apiurl}/${baseId}/${tableId}?filterByFormula=${encodedFormula}`, {
            headers: {
                "Authorization": `Bearer ${pat}`
            }
        })
    } catch (e) {
        throw new Error(CreateErrors.Network);
    }
    if (validateRes.status === 200) {
        const resJson = await validateRes.json() as {
            records: User[]
        };
        console.log(resJson);
        if (resJson.records.length > 0) {
            console.log("Throwing error");
            console.log(CreateErrors.UserExists);
            throw new Error(CreateErrors.UserExists);
        }
    } else {
        throw new Error(CreateErrors.Failed);
    }
    let res: Response | undefined;
    try {
        res = await fetch(`${apiurl}/${baseId}/${tableId}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${pat}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            email: email,
                            password_hash: hashedPassword,
                            full_name: fullName
                        }
                    }
                ]
            })
        });
    } catch (e) {
        throw new Error(CreateErrors.Network);
    }
    if (res.status === 200) {
        const resJson = await res.json() as {
            records: User[]
        };
        return resJson.records[0].id;
    } else {
        throw new Error('Failed to create user');
    }

}
