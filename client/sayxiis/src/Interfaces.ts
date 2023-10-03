export type UserLoged = {
    email: string
    password: string
}

// not used by the moment
export type Users = {
    id: number
    username: string
    password: string
    email: string
    profilePicture: string
    name: string
    surname: string
    intro: string
}

export type UserRegister = {
    username: string
    password: string
    email: string
}

export type Tag = {
    name: string
    sticker: string
}

export type PhotoTags = {
    userId: number
    photoUrl: string
    tagId: number
}

export type Photos = {
    id?: number
    userId: number
    photoUrl: string
    winSticker?: boolean
    vote?: number
}

export interface AuthContextType {
    signup: (user: UserRegister) => void
    signin: (user: UserLoged) => void
    user: Users | null
    setUser: (user: Users | null) => void
    users: Users[]
    isLogged: boolean
    cookies: Record<string, any>
}

export interface PhotosContextType {
    photos: Photos | null
    setPhotos: (photo: Photos | null) => void
    photosTag: PhotoTags | null
    setPhotosTag: (tags: PhotoTags | null) => void
}

export interface TagsContextType {
    allTag: Tag | null
    setAllTag: (tag: Tag | null) => void
}