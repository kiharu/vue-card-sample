import Vue from 'vue'
import PostPage2 from 'src/components/post/PostPage2'

describe('PostPage2.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><post-page2></post-page2></div>',
      components: { PostPage2 }
    }).$mount()
    expect(vm.$el.querySelector('article').textContent).to.contain('Vue-Card Test')
  })
})
