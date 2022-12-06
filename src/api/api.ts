
import axios from "axios";
const instance = axios.create({
    withCredentials:true,
    headers:{'API-KEY': '4e5eb0fb-4857-4d22-8bd9-093ad3b03cbe'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers:(currentPage:number, pageSize: number) => {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        );
    },

}
export const followingAPI = {
    follow:(id: number) => {
        return (
            instance.post(`follow/${id}`,{}).then(response => response.data)
        );
    },
    unfollow: (id: number) => {
    return (
        instance.delete(`follow/${id}`).then(response => response.data)
    );
},
}
export const profileAPI = {
    getProfile:(userId:string) => {
        return (
            instance.get(`profile/${userId}`).then(response => response.data)
        );

    },
    getUserStatus:(userId:string) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus: (status:string) => {
        return instance.put(`profile/status`,{status:status})

    }
}
export const authAPI = {
    authMe:() => {
        return (
            instance.get(`auth/me`).then(response => response.data)
        );
    }
}
