import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

function MyPosts() {
    return (
        <div>
            <h3 className={style.title}>My publications</h3>
            <div className={style.wrapper}>
                <PostForm/>
                <ul className={style.posts}>
                    <Post title={'Чернобыль'}
                          message={'Девять лет назад я поехал на экскурсию в Чернобыль'}
                          likes={20000}/>
                    <Post title={'23.34'}
                          message={'12 суток - не за что'}
                          likes={200000}/>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;