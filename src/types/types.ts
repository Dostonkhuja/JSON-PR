
export type AlbumType = {
    userId: number,
    id: number,
    title: string
}

export type PhotosType = {
    albumId: number
    id: number,
    title: string
    url: string
    thumbnailUrl: string
}

type GeoType = {
    lat: string
    lng: string
}

type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}

type CompanyType = {
    "name": string,
    "catchPhrase": string,
    "bs": string
}

export type UserType = {
    id: number
    name: string
    username: string
    userName?:string
    email: string
    address: AddressType,
    phone: string,
    website: string,
    company:CompanyType
    messages:any
    profile:UserType
    followed?:boolean
}

export type Postype = {
    "userId": number
    "id": number
    "title": string
    "body":string
    newPost?:string
}

export type CommentsType = {
    "postId": number
    "id": number
    "name": string
    "email": string
    "body": string
}

export type PhotoType = {
    "albumId": number
    "id": number
    "title": string
    "url": string
    "thumbnailUrl": string
}

export type PostType = {
    "userId": number
    "id": number
    "title": string
    "body": string
}

export type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}