import type { IUserState } from '../slices/types';

export type UserData = Omit<IUserState, 'errorMessage'>;
