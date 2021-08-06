import React from 'react';
import style from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import PostForm from './PostForm/PostForm';

function MyPosts() {
    const posts: PostType[] = [
        {
            title: 'Чернобыль',
            message: 'Девять лет назад я поехал на экскурсию в Чернобыль',
            likes: 20000
        },
        {
            title: '23.34',
            message: '12 суток - не за что',
            likes: 200000
        }
    ];

    let postElements = posts.map(p => <Post title={p.title} message={p.message} likes={p.likes}/>)
    return (
        <div>
            <h3 className={style.title}>My publications</h3>
            <div className={style.wrapper}>
                <PostForm/>
                <ul className={style.posts}>
                    { postElements }
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;