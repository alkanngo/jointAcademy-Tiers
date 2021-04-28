/**
 * THIS FILE MUST NOT BE CHANGED!!!
 * Any change to this file will be reason for desqualification
 */
 import extra from './jaex.json';

 export type Country = 'DK'|'FI'|'NO'|'US'
 export type ApiUser = Record<string, any>
 
 const DEFAULT_BASE_RECORD_NUMBER = parseInt(process.env.REACT_APP_DEFAULT_BASE_RECORD_NUMBER || '20')
 const DEFAULT_NUMBER_OF_RECORDS = process.env.REACT_APP_DEFAULT_NUMBER_OF_RECORDS 
     ? parseInt(process.env.REACT_APP_DEFAULT_NUMBER_OF_RECORDS)
     : undefined
 
 const buildRequest = (
     country: Country, 
     maxRecords: number | undefined = DEFAULT_NUMBER_OF_RECORDS, 
     minRecords: number = DEFAULT_BASE_RECORD_NUMBER,
 ): string => {
     const maxRecordNumber = maxRecords ? Math.floor(minRecords + maxRecords) : 100
     if (maxRecordNumber > 1000) {
         return `./replies/ja${country.toLocaleLowerCase()}_huge.json`
     } else if (maxRecordNumber > 100) {
         return `./replies/ja${country.toLocaleLowerCase()}_big.json`
     }
     return `./replies/ja${country.toLocaleLowerCase()}_small.json`
 }
 
 const addEntropy = (reply: ApiUser[]) => {
     const finalResult = [
         ...reply || [],
         ...extra.records,
     ]
     var currentIndex = finalResult.length, temporaryValue, randomIndex;
     // While there remain elements to shuffle...
     while (0 !== currentIndex) {//   // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;    
         // And swap it with the current element.
         temporaryValue = finalResult[currentIndex];
         finalResult[currentIndex] = finalResult[randomIndex];
         finalResult[randomIndex] = temporaryValue;
     }
   
     return finalResult;
   }
 
 const getUsersFromFile = async (fileName: string, maxDelayMs: number = 1000): Promise<ApiUser[]> => {
     return fetch(fileName)
         .then(reply => {
             return reply.json()
         })
         .then(jsonReply => {
             const results: ApiUser[] = addEntropy(jsonReply?.results || [])
             const maxPos = DEFAULT_NUMBER_OF_RECORDS ? DEFAULT_BASE_RECORD_NUMBER + DEFAULT_NUMBER_OF_RECORDS : undefined
             return results.length ? results.slice(DEFAULT_BASE_RECORD_NUMBER, maxPos) : [];
         }).then(finalResult => {
             return new Promise(resolve => setTimeout(() => resolve(finalResult), Math.random() * maxDelayMs))
         })
 }
 
 interface NetworkIssuesProbablility {
     issues?: number,
     maxDelayMs?: number,
     error?: number,
 }
 const getUsersWithNetworkMock = (fileName: string, probs: NetworkIssuesProbablility = {}): Promise<ApiUser[]> => {
     const { issues = 0.2, maxDelayMs = 400, error = 0.3 } = probs
     if (Math.random() < issues) {
         if (Math.random() < error) {
             return new Promise((_, reject) => setTimeout(() => reject('Connection timeout'), maxDelayMs * 10))
         } else {
             return getUsersFromFile(fileName, maxDelayMs * 10)
         }
     }
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