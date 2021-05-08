
import Home from './components/home/Home.vue';
import CreatePost from './components/create-post/CreatePost.vue';
import ViewPost from './components/view-post/ViewPost.vue';
import Contact from './components/contact/Contact.vue';
import About from './components/about/About.vue';

export const routes = [
    { path: '/', component: Home, title: 'home', menu: true },
    { path: '/new', component: CreatePost, title: 'new', menu: true },
    { path: '/post/:id', component: ViewPost, title: 'post' },
    { path: '/contact', component: Contact, title: 'contact', menu: true },
    { path: '/about', component: About, title: 'about', menu: true }
];
