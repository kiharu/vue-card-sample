import TopPage from './components/top/TopPage.vue'
import PostPage from './components/post/PostPage.vue'
import PostPage2 from './components/post/PostPage2.vue'

export function configRouter (router) {
  router.map({
    '/': {
      component: TopPage
    },
    '/post': {
      component: PostPage
    },
    '/test': {
      component: PostPage2
    }
  })
}
