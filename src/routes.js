
import Home from './components/home/Home.vue';
import CreatePost from './components/create-post/CreatePost.vue';
import ViewPost from './components/view-post/ViewPost.vue';

export const routes = [
    { path: '/', component: Home, title: 'home', menu: true },
    { path: '/new', component: CreatePost, title: 'novo', menu: true },
    { path: '/post/:id', component: ViewPost,  title: 'post' }
];
