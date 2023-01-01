
import usersReducer, {followUnfollow, InitialStateUsersType, setUsers,UserType} from "../Reducers/usersReducer";
let startState:InitialStateUsersType
beforeEach(() => {
    startState = {
        items: [
            {
                name: "Victor",
                id: 1,
                uniqueUrlName: null,
                photos: {
                    "small": null,
                    "large": null
                },
                status: null,
                followed: false
            }, {
                name: "Nick",
                id: 2,
                uniqueUrlName: null,
                photos: {
                    "small": null,
                    "large": null
                },
                status: null,
                followed: false
            }, {
                name: "Jax",
                id: 3,
                uniqueUrlName: null,
                photos: {
                    "small": null,
                    "large": null
                },
                status: null,
                followed: false
            }, {
                name: "Helen",
                id: 4,
                uniqueUrlName: null,
                photos: {
                    "small": null,
                    "large": null
                },
                status: null,
                followed: true
            },

        ],
        pageSize: 5,
        totalCount: 0,
        currentPage:1,
        isFetchingValue: false,
        followingInProgress: []
    }
})
test('Property followed should be changed on true ', () => {


    expect(startState.items[1].followed).toBe(false)
    const endState = usersReducer(startState, followUnfollow(2,true))
    expect(endState.items[1].followed).toBe(true)
})
test('Property followed should be changed on false', () => {


    expect(startState.items[3].followed).toBe(true)
    const endState = usersReducer(startState, followUnfollow(4,false))
    expect(endState.items[3].followed).toBe(false)
})
test('Users should be added ', () => {

    const arr:Array<UserType>  = [
        {
            name: "Jax",
            id: 5,
            uniqueUrlName: null,
            photos: {
                "small": null,
                "large": null
            },
            status: null,
            followed: false
        }, {
            name: "Helen",
            id: 6,
            uniqueUrlName: null,
            photos: {
                "small": null,
                "large": null
            },
            status: null,
            followed: false
        }
    ]

    expect(startState.items.length).toBe(4)
    const endState = usersReducer(startState, setUsers(arr))
    expect(endState.items.length).toBe(2)


})