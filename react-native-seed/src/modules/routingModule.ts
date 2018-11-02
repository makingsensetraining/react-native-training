import { createStackNavigator } from 'react-navigation';

import TodoListContainer from './views/todo-list';
import LoginContainer from './views/login';
import AlbumListContainer from './views/album';

export default createStackNavigator(
  {
    Login: LoginContainer,
    TodoList: TodoListContainer,
    AlbumList: AlbumListContainer
  },
  { initialRouteName: 'Login' }
);
