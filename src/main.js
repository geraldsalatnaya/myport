import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'


 const theme = localStorage.getItem('theme');
  if(!theme){
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark')
  } else if (theme === 'dark'){
    document.documentElement.classList.add('dark')
  } else if(theme === 'light'){
    document.documentElement.classList.remove('dark')
  } 

createApp(App).mount('#app')



const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { title: 'Home'},
        component: Home
    },
    {
        path: '/about',
        name: 'About Me',
        meta: { title: 'About Me'},
        component: About
    },
    {
        path: '/project',
        name: 'Project',
        meta: { title: 'Project'},
        component: Project
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: { title: 'Contact'},
        component: Contact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes

    
});

const app = createApp(App);
app.use(router);
app.mount('#app');







router.beforeEach((to, from, next) => {
  const defaultTitle = "Gerald's Portofolio";
  document.title = to.meta.title || defaultTitle;
  next();




});




