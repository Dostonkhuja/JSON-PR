import axios from "axios";

let instance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

export const postsAPI={
    getPosts() {return instance.get('/posts')}
}

export const photosAPI={
    getPhotos() {return instance.get('/photos')}
}

export const commentsAPI={
    getComments() {return instance.get('/comments')}
}

export const usersAPI={
    getUsers() {return instance.get('users')},
    getUserPosts(id) {return instance.get(`posts?userId=${id}`)},
    followPost(id) { return instance.patch(`users/${id}`,{followed:true})},
    unfollowDelete(id) {return instance.patch(`users/${id}`,{followed:false})}
}

export const todoAPI={
    getTodoLists() {return instance.get('todos')},
    updateTodoList(id,toDo){return instance.patch(`todos/${id}`,toDo)}
}

export const albumsAPI={
    getAlbums() {return instance.get('/albums')},
    getPhotosAlbum(albumId){return instance.get(`photos?albumId=${albumId}`)}
}

export const dialogsAPI={
    getUserMessages(userId){return instance.patch(`users/${userId}`,{messages:[]} )},
    sendMessage(userId,messages){return instance.patch(`users/${userId}`,{messages} )}}

export const profileAPI={
    getProfile(userId) {return instance.get(`users?id=${userId}`)},
    getPosts(userId) {return instance.get(`posts?userId=${userId}`)},
    getComments(postId) {return instance.get(`comments?postId=${postId}`)},
    addNewPost(newPost) {return instance.post(`posts`,newPost)},
}
export const authAPI={
    signInRequest(username,password,remember) {
        return instance.post(`users`,{profile:{username,password,remember,
                adress: "", bs: "", catchPhrase: "", company: "", email: "", name: "", phone: "", webSite: "",}})
    },
    setMyProfile(profile) {
        return instance.post(`users`,{profile})},
    logout(userId) {return instance.delete(`users/${userId}`)},
    savePhoto(userPhoto) {
        return userPhoto
        //JsonPlaceholder saytiga rasm joylay olmadim. mabodo yo'lini topsam o'rnatib qo'yaman
        //I could not upload an image to JsonPlaceholder. I'll set it up if I find a way

        // const formData = new FormData();
        // formData.append("image", userPhoto);
        // return instance.put(`photos`,formData,{
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }})
        // return instance.put(`photos/1`,userPhoto)

        //JsonPlaceholder saytiga rasm joylay olmadim. mabodo yo'lini topsam o'rnatib qo'yaman
    },
}