import { mount } from '@vue/test-utils'
import ActiontItem from '@/components/ActiontItem'

describe('ActiontItem.vue', () => {
  let wrapper = null;

  beforeEach(()=> {
    wrapper = mount(ActiontItem, { propsData: {action:{
      firstIndex:0,
      secondIndex:1,
      indexAction:0,
      element:"post 1"
    }
    }})

  });

  afterEach(()=> {
    wrapper.destroy;
  });

  it('render component', () => {
    const comp = wrapper.find(".action-item").exists();
    expect(comp).toEqual(true);
  });
  it('press down arrow and after emit clickDown', async () => {
    await wrapper.find('.time-travel').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('actionTravel');
  })

})
