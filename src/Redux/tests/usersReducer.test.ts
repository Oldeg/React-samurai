import {v1} from "uuid";
import usersReducer, {followAC, initialStateUsersType, setUsersAC, unFollowAC, UserType} from "../Reduce/usersReducer";

test('Property followed should be changed on true ', () => {
    const id1 = v1()
    const id2 = v1()
    const startState: initialStateUsersType = {
        users: [
            {
                id: id1,
                fullName: 'Dmitry',
                status: 'Nice looking',
                followed: true,
                location: {city: 'Minsk', country: 'Belarus',}
            },
            {
                id: id2,
                fullName: 'Nick',
                status: 'Looking for a job',
                followed: false,
                location: {city: 'Warshaw', country: 'Poland'}
            },
            {
                id: v1(),
                fullName: 'Artem',
                status: 'Like swimming',
                followed: true,
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                fullName: 'Daniel',
                status: 'I want to buy a car',
                followed: false,
                location: {city: 'Chicago', country: 'USA'}
            }
        ]
    }
    expect(startState.users[1].followed).toBe(false)
    const endState = usersReducer(startState, followAC(id2))
    expect(endState.users[1].followed).toBe(true)
})
test('Property followed should be changed on false ', () => {
    const id1 = v1()
    const id2 = v1()
    const startState: initialStateUsersType = {
        users: [
            {
                id: id1,
                fullName: 'Dmitry',
                status: 'Nice looking',
                followed: true,
                location: {city: 'Minsk', country: 'Belarus',}
            },
            {
                id: id2,
                fullName: 'Nick',
                status: 'Looking for a job',
                followed: false,
                location: {city: 'Warshaw', country: 'Poland'}
            },
            {
                id: v1(),
                fullName: 'Artem',
                status: 'Like swimming',
                followed: true,
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                fullName: 'Daniel',
                status: 'I want to buy a car',
                followed: false,
                location: {city: 'Chicago', country: 'USA'}
            }
        ]
    }
    expect(startState.users[0].followed).toBe(true)
    const endState = usersReducer(startState, unFollowAC(id1))
    expect(endState.users[0].followed).toBe(false)
})
test('Users should be added ', () => {
    const id1 = v1()
    const id2 = v1()
    const arr:Array<UserType>  = [
        {
            id: v1(),
            fullName: 'Dmitry',
            status: 'Nice looking',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus',}
        },
        {
            id: v1(),
            fullName: 'Nick',
            status: 'Looking for a job',
            followed: false,
            location: {city: 'Warshaw', country: 'Poland'}
        }
    ]
    const startState: initialStateUsersType = {
        users: [
            {
                id: id1,
                fullName: 'Dmitry',
                status: 'Nice looking',
                followed: true,
                location: {city: 'Minsk', country: 'Belarus',}
            },
            {
                id: id2,
                fullName: 'Nick',
                status: 'Looking for a job',
                followed: false,
                location: {city: 'Warshaw', country: 'Poland'}
            },
            {
                id: v1(),
                fullName: 'Artem',
                status: 'Like swimming',
                followed: true,
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                fullName: 'Daniel',
                status: 'I want to buy a car',
                followed: false,
                location: {city: 'Chicago', country: 'USA'}
            }
        ]
    }
    expect(startState.users.length).toBe(4)
    const endState = usersReducer(startState, setUsersAC(arr))
    expect(endState.users.length).toBe(6)
    expect(endState.users[5].fullName).toBe('Nick')
})