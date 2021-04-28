/**
 * THIS FILE MUST NOT BE CHANGED!!!
 * Any change to this file will be reason for desqualification
 */
import { Country } from '../lib/api'
import { User } from '../service/user'

export interface userUpdateEvent {
    success: boolean
    market: string
    newUsers?: User[]
    users: User[]
}

export interface GetUsersOptions {
    markets?: Array<Country>, 
    eventListener?: replyEventListener,
}

export type replyEventListener = (event: userUpdateEvent) => void

export type GetUsersOutput = {
    result?: Promise<User[]>
    markets?: Array<string>
    success?: boolean
}

export interface ServiceApi {
    getUsers: (options?: GetUsersOptions) => GetUsersOutput
    getUser: (id: string) => Promise<User>
}
