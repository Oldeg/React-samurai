
import usersReducer, {followAC, initialStateUsersType, setUsersAC, unFollowAC, UserType} from "../Reduce/usersReducer";

test('Property followed should be changed on true ', () => {

    const startState: initialStateUsersType = {
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
                followed: false
            },

        ],
        pageSize: 5,
        totalCount: 0,
        currentPage:1
    }
    expect(startState.items[1].followed).toBe(false)
    const endState = usersReducer(startState, followAC(2))
    expect(endState.items[1].followed).toBe(true)
})
test('Property followed should be changed on false ', () => {

    const startState: initialStateUsersType = {
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
                followed: true
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
                followed: false
            },

        ],
        pageSize: 5,
        totalCount: 0,
        currentPage:1

    }
    expect(startState.items[0].followed).toBe(true)
    const endState = usersReducer(startState, unFollowAC(1))
    expect(endState.items[0].followed).toBe(false)
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
    const startState: initialStateUsersType = {
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
                followed: false
            },

        ],
        pageSize: 5,
        totalCount: 0,
        currentPage:1
    }
    expect(startState.items.length).toBe(4)
    const endState = usersReducer(startState, setUsersAC(arr))
    expect(endState.items.length).toBe(6)
    expect(endState.items[5].name).toBe('Helen')
})