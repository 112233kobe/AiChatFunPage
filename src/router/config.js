import Home from '../views/Home/Home';

const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  }
]

export default routes;