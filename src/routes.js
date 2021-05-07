
import Home from './components/home/Home.vue';
import ViewPost from './components/view-post/ViewPost.vue';

export const routes = [
    { path: '/', component: Home, title: 'Home', menu: true },
    { path: '/post/:id', component: ViewPost }
];
