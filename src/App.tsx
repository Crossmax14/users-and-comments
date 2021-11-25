import { useEffect, useState } from 'react';
import { User } from './models/User';
import { Comment } from './models/Comments';
import { getComments, getUsers } from './utils/endpoints';
import UsersTable from './components/organism/usersTable/usersTable';
import CommentsTable from './components/organism/commentsTable/commentsTable';
import './App.css';

export const isDevelopment: boolean = false; // or change to environment variables

const getData = (getMethod: Function, stateFunction: Function) => {
  getMethod().then((response: any) => {
    if (Array.isArray(response)) stateFunction(response);
    else {
      stateFunction([]);
      console.error('[App Component] Get comments method returns not array. Response: ', response);
    }
  });
}

export default function App() {
  const visibleCommentsCountStep: number = 100;

  const [users, setUsers] = useState<User[]>([]);
  const [displayMoreInfo, setDisplayMoreInfo] = useState<boolean>(false);

  const [comments, setComments] = useState<Comment[]>([]);
  const [countVisibleComments, setCountVisibleComments] = useState<number>(visibleCommentsCountStep);

  useEffect(() => {
    getData(getUsers, setUsers);
    getData(getComments, setComments);
  }, []);

  return (
    <section id={'usersAndComments'}>
      <div className={'usersData'}>
        <div>
          <h1>Users table</h1>
          {users.length !== 0 &&
            <button onClick={() => setDisplayMoreInfo(!displayMoreInfo)}>Show {displayMoreInfo ? 'less' : 'more'} info</button>}
        </div>
        {users.length === 0 ?
          <span className={'loader'}>Loading</span> :
          <UsersTable users={users} displayMoreInfo={displayMoreInfo} />}
      </div>
      <div className={'commentsData'}>
        <h1>Comments table</h1>
        {comments.length === 0 ?
          <span className={'loader'}>Loading</span> :
          <CommentsTable comments={comments.slice(0, countVisibleComments)} />}
        {comments.length > countVisibleComments &&
          <button onClick={() => setCountVisibleComments(countVisibleComments + visibleCommentsCountStep)}>Load next 100 comments</button>}
      </div>
    </section>
  );
}