export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: UserAdress;
    phone?: string;
    website?: string;
    company?: UserCompanyData;
}

interface UserAdress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: UserAdressGeolocation;
}

interface UserAdressGeolocation {
    lat: string;
    lng: string;
}

interface UserCompanyData {
    name: string;
    catchPhrase?: string;
    bs?: string;
}