
import axios from "axios";
const instance = axios.create({
    withCredentials:true,
    headers:{'API-KEY': '311224b5-62e3-4841-ad14-9a778d561d54'},
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
    getProfile:(id: string) => {
        return (
            instance.get(`profile/${id}`).then(response => response.data)
        );
    }
}
export const authAPI = {
    authMe:() => {
        return (
            instance.get(`auth/me`).then(response => response.data)
        );
    }
}
