/**
 * THIS FILE MUST NOT BE CHANGED!!!
 * Any change to this file will be reason for desqualification
 */
type Country = 'DK'|'FI'|'NO'|'US'
const DEFAULT_BASE_RECORD_NUMBER = parseInt(process.env.REACT_APP_DEFAULT_BASE_RECORD_NUMBER || '20')
const DEFAULT_NUMBER_OF_RECORDS = parseInt(process.env.REACT_APP_DEFAULT_NUMBER_OF_RECORDS || '20')

const buildRequest = (
    country: Country, 
    maxRecords: number = DEFAULT_NUMBER_OF_RECORDS, 
    minRecords: number = DEFAULT_BASE_RECORD_NUMBER,
): string => {
    const maxRecordNumber = Math.floor(minRecords + maxRecords)
    if (maxRecordNumber > 1000) {
        return `./replies/ja${country.toLocaleLowerCase()}_5000.json`
    } else if (maxRecordNumber > 100) {
        return `./replies/ja${country.toLocaleLowerCase()}_1000.json`
    }
    return `./replies/ja${country.toLocaleLowerCase()}_100.json`
}

const getUsersFromFile = async (fileName: string, maxDelayMs: number = 1000): Promise<Record<string, any>[]> => {
    return fetch(fileName)
        .then(reply => reply.json())
        .then(jsonReply => {
            const results: Record<string, any>[] = jsonReply?.results || [];
            return results.length ? results.slice(DEFAULT_BASE_RECORD_NUMBER, DEFAULT_BASE_RECORD_NUMBER+DEFAULT_NUMBER_OF_RECORDS) : [];
        }).then(finalResult => {
            return new Promise(resolve => setTimeout(() => resolve(finalResult), Math.random() * maxDelayMs))
        })
}

interface NetworkIssuesProbablility {
    issues?: number,
    maxDelayMs?: number,
    error?: number,
}
const getUsersWithNetworkMock = (fileName: string, probs: NetworkIssuesProbablility = {}): Promise<Record<string, any>[]> => {
    const { issues = 0.2, maxDelayMs = 400, error = 0.3 } = probs
    if (Math.random() < issues) {
        if (Math.random() < error) {
            return new Promise((resolve, reject) => setTimeout(() => reject('Connection timeout'), maxDelayMs * 10))
        } else {
            return getUsersFromFile(fileName, maxDelayMs * 10)
        }
    }
    console.groupEnd()
    return getUsersFromFile(fileName, maxDelayMs)
}

const getUsUsers = () => {
    return getUsersWithNetworkMock(buildRequest('US'));
}

const getFiUsers = () => {
    return getUsersWithNetworkMock(buildRequest('FI'));
}

const getDkUsers = () => {
    return getUsersWithNetworkMock(buildRequest('DK'));
}

const getNoUsers = () => {
    return getUsersWithNetworkMock(buildRequest('NO'));
}

const api = {
    getUsUsers,
    getFiUsers,
    getDkUsers,
    getNoUsers,
}
export default api