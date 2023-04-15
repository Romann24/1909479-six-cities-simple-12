export type Location = {
    lat: number;
    lng: number;
    zoom: number;
}

export type City = {
    location: Location;
    name: string;
}

export type Offer = {
    id: string;
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
    city: City;
};

export type Offers = Offer[];

export type ActiveOffer = Offer | null;
