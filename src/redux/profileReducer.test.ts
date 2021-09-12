import {addPost, changeNewPostText, changeNewPostTitle, PostType, profileReducer} from './profileReducer';
import {v1} from 'uuid';

type StartStateType = {
    posts: PostType[]
    newPostTitle: string
    newPostText: string
}

let startState: StartStateType;

beforeEach(() => {
    startState = {
        posts: [
            {
                id: v1(),
                title: 'Чернобыль',
                message: 'Девять лет назад я поехал на экскурсию в Чернобыль',
                likes: 20000
            }
        ],
        newPostTitle: '',
        newPostText: ''
    }
});

test('new post should be added', () => {
    startState.newPostTitle = 'My new day';
    startState.newPostText = 'very happy day';
    const endState = profileReducer(startState, addPost());

    expect(endState.posts.length).toBe(2);
    expect(endState.posts[1].title).toBe('My new day');
    expect(endState.posts[1].message).toBe('very happy day');
});

test('new title should be changed', () => {
    const newTitle = 'My 18 years';

    const endState = profileReducer(startState, changeNewPostTitle(newTitle));

    expect(endState.newPostTitle).toBe(newTitle);
});

test('new text should be changed', () => {
    const newText = 'My birthday its beautiful day';

    const endState = profileReducer(startState, changeNewPostText(newText));

    expect(endState.newPostText).toBe(newText);
});