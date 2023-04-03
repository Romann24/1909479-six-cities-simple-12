export type Offer = {
    id: number;
    previewImage: string;
    photos: string[];
    isPremium: boolean;
    title: string;
    rating: number;
    type: string;
    bedrooms: number;
    maxAdults: number;
    price: number;
    conveniences: string[];
    hostName: string;
    avatar: string;
    isPro: boolean;
    description: string;

};

export type Offers = Offer[];

export type ActiveOffer = Offer | null;
