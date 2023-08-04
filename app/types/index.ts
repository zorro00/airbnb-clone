import { User, Listing, Reservation } from "@prisma/client";

export type SafeListing = Omit<
    Listing,
    'createdAt'
> & {
    createdAt: string,
}
export type SafeUser = Omit<
    User, 'createdAt' | 'updatedAt' | 'emailVarified'
> & {
    createdAt: string,
    updateAt: string,
    emailVerified: string | null
}

export type SafeReservation = Omit<
    Reservation,
    'createdAt' | 'startDate' | 'endDate' | 'listing'
> & {
    createdAt: string,
    endDate: string,
    startDate: string,
    listing: SafeListing
}