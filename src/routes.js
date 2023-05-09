import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './components/HomeView.vue'
import MoviePage from './components/movies/MoviePage.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
