import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './components/HomeView.vue'
import MoviePage from './components/movies/MoviePage.vue'
import MovieActors from './components/actors/MovieActors.vue'
import ActorDetail from './components/actors/ActorDetail.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
