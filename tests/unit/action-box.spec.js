import { mount } from '@vue/test-utils'
import ActiontBox from '@/components/ActiontBox'

describe('ActiontBox.vue', () => {
  let wrapper = null;

  beforeEach(()=> {
    wrapper = mount(ActiontBox,{
      propsData:{
        actions:[]
      }
    })

  });

  afterEach(()=> {
    wrapper.destroy;
  });

  it('render component', () => {
    const comp = wrapper.find(".action-box").exists();
    expect(comp).toEqual(true);
  });


})
