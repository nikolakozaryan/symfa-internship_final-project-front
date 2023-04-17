export enum ProfileRoutes {
    Account = 'account',
    Payment = 'payment',
    History = 'history',
}

export type ProfileLinkType = {
    id: number;
    routeTo: ProfileRoutes;
};

export const PROFILE_LINKS: ProfileLinkType[] = [
    { id: 3, routeTo: ProfileRoutes.Account },
    { id: 4, routeTo: ProfileRoutes.Payment },
    { id: 5, routeTo: ProfileRoutes.History },
];
