import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './components/front/HomeView.vue'
import MoviePage from './components/movies/MoviePage.vue'
import MovieActors from './components/actors/MovieActors.vue'
import ActorDetail from './components/actors/ActorDetail.vue'
import RegisterComponent from '@/components/profile/RegisterComponent.vue'
import LoginComponent from '@/components/profile/LoginComponent.vue'
import ProfilePage from '@/components/profile/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: MoviePage
  },
  {
    path: '/actors',
    name: 'Actors',
    component: MovieActors
  },
  {
    path: '/actor/:id',
    name: 'Actor',
    component: ActorDetail
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  }
]

const router = new VueRouter({
  routes
})

export default router
