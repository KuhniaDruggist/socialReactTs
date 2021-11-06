import {setUsers, toggleFollowing, usersReducer, UsersType} from './usersReducer';

test('users should be added to state', () => {
    const startState = {
        users: [] as UsersType[],
        totalUsersCount: 0,
        pageSize: 5,
        currentPage: 1,
        isFetching: false,
    }

    const users: UsersType[] = [
        {
            name: 'Ivan',
            id: 1,
            photos: {
                small: 'https://pbs.twimg.com/media/EgX6nMxUYAAirGg.jpg',
                large: undefined
            },
            status: 'I love free Belarus',
            followed: true
        },
        {
            name: 'Angelika',
            id: 2,
            photos: {
                small: 'http://www.dejurka.ru/wp-content/uploads/2018/10/cute-cats-draw4.jpg',
                large: undefined
            },
            status: 'I love my cat Semyon',
            followed: false
        }
    ]

    const endState = usersReducer(startState, setUsers(users));

    expect(endState.users.length).toBe(2);
    expect(endState.users[0].name).toBe('Ivan');
});

test('property "followed" should be changed', () => {
    const startState = {
        users: [
            {
                name: 'Ivan',
                id: 1,
                photos: {
                    small: 'https://pbs.twimg.com/media/EgX6nMxUYAAirGg.jpg',
                    large: undefined
                },
                status: 'I love free Belarus',
                followed: true
            },
            {
                name: 'Angelika',
                id: 2,
                photos: {
                    small: 'http://www.dejurka.ru/wp-content/uploads/2018/10/cute-cats-draw4.jpg',
                    large: undefined
                },
                status: 'I love my cat Semyon',
                followed: false
            }
        ] as UsersType[],
        totalUsersCount: 0,
        pageSize: 5,
        currentPage: 1,
        isFetching: false,
    }
    const userId = startState.users[0].id;

    const endState = usersReducer(startState, toggleFollowing(userId));

    expect(endState.users.length).toBe(2);
    expect(endState.users[0].followed).toBe(false);
    expect(endState.users[1].followed).toBe(false);
});