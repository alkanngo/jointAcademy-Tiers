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

const getUsersFromFile = async (fileName: string): Promise<Record<string, any>[]> => {
    console.log('importing', fileName)
    return fetch(fileName)
        .then(reply => reply.json())
        .then(jsonReply => {
            const results: Record<string, any>[] = jsonReply?.results || [];
            return results.length ? results.slice(DEFAULT_BASE_RECORD_NUMBER, DEFAULT_BASE_RECORD_NUMBER+DEFAULT_NUMBER_OF_RECORDS) : [];
        })    
}

const getUsUsers = () => {
    return getUsersFromFile(buildRequest('US'));
}

const getFiUsers = () => {
    return getUsersFromFile(buildRequest('FI'));
}

const getDkUsers = () => {
    return getUsersFromFile(buildRequest('DK'));
}

const getNoUsers = () => {
    return getUsersFromFile(buildRequest('NO'));
}

const api = {
    getUsUsers,
    getFiUsers,
    getDkUsers,
    getNoUsers,
}
export default api