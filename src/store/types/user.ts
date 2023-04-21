import type { IUserState } from './storeState';

export type UserData = Omit<IUserState, 'errorMessage'>;
