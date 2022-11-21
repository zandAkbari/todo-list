import { mount } from '@vue/test-utils'
import PostBox from '@/components/PostBox'

describe('PostItem.vue', () => {
  let wrapper = null;

  beforeEach(()=> {
    wrapper = mount(PostBox)

  });

  afterEach(()=> {
    wrapper.destroy;
  });

  it('render component', () => {
    const comp = wrapper.find(".post-box").exists();
    expect(comp).toEqual(true);
  });


})
