import { Country } from '../lib/api'
import { User } from '../helpers/userHelper'

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