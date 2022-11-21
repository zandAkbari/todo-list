import { mount } from '@vue/test-utils'
import PostPage from '@/views/PostPage'

describe('PostPage.vue', () => {
  let wrapper = null;

  beforeEach(()=> {
    wrapper = mount(PostPage)

  });

  afterEach(()=> {
    wrapper.destroy;
  });

  it('render component', () => {
    const comp = wrapper.find(".post-page").exists();
    expect(comp).toEqual(true);
  });


})
