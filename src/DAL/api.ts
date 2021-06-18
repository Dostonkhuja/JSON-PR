import axios from "axios";
import {AlbumType, CommentsType, PhotosType, PhotoType, PostType, Postype, TodoType, UserType} from "../types/types";

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

export const postsAPI = {
    getPosts() {return instance.get<PostType[]>('/posts')}
}

export const photosAPI = {
    getPhotos() {return instance.get<PhotoType[]>('/photos')}
}

export const commentsAPI = {
    getComments() {return instance.get<CommentsType[]>('/comments')}
}

export const usersAPI = {
    getUsers() {return instance.get<UserType[]>('users')},
    getUserPosts(id:number) {return instance.get<Postype>(`posts?userId=${id}`)},
    followPost(id:number) { return instance.patch<UserType>(`users/${id}`,{followed:true})},
    unfollowDelete(id:number) {return instance.patch<UserType>(`users/${id}`,{followed:false})}
}

export const todoAPI = {
    getTodoLists() {return instance.get<TodoType[]>('todos')},
    updateTodoList(id:number,toDo:TodoType){return instance.patch<TodoType>(`todos/${id}`,toDo)}
}

export const albumsAPI = {
    getAlbums() {return instance.get<Array<AlbumType>>('/albums')},
    getPhotosAlbum(albumId:number){
        return instance.get<Array<PhotosType>>(`photos?albumId=${albumId}`)}
}



export const dialogsAPI = {
    getUserMessages(userId:number){return instance.patch<UserType>(`users/${userId}`,{messages:[]} )},
    sendMessage(userId:number,messages:string){return instance.patch<UserType>(`users/${userId}`,{messages} )}}

export const profileAPI = {
    // getProfile(userId) {return instance.patch(`users/${userId}`,{followed:false} )},
    getProfile(userId:number) {return instance.get<UserType>(`users?id=${userId}`)},
    getPosts(userId:number) {return instance.get<Array<Postype>>(`posts?userId=${userId}`)},
    getComments(postId:number) {return instance.get<CommentsType[]>(`comments?postId=${postId}`)},
    addNewPost(newPost:string) {return instance.post<PostType>(`posts`,newPost)},
}

export const authAPI = {
    signInRequest(username:string,password:string,remember:boolean) {
        return instance.post<UserType>(`users`,{profile:{username,password,remember,
                adress: "", bs: "", catchPhrase: "", company: "", email: "", name: "", phone: "", webSite: "",}})
    },
    setMyProfile(profile:UserType) {
        return instance.post<UserType>(`users`,{profile})},
    logout(userId:number) {return instance.delete(`users/${userId}`)},
    savePhoto(userPhoto:File) {
        return userPhoto
        //I could not upload an image to JsonPlaceholder. I'll set it up if I find a way
        // const formData = new FormData();
        // formData.append("image", userPhoto);
        // return instance.put(`photos`,formData,{
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }})
        // return instance.put(`photos/1`,userPhoto)
    },
}