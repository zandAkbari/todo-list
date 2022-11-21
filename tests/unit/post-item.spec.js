import { mount } from '@vue/test-utils'
import PostItem from '@/components/PostItem'

describe('PostItem.vue', () => {
  let wrapper = null;
  let firstElement = null;
  let lastElement = null;

  beforeEach(()=> {
    wrapper = mount(PostItem, {
          propsData:{
            post:{
              "userId": 10,
              "id": 91,
              "title": "aut amet sed",
              "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
            },
            index: 2,
            length: 5
          },
        },
    );
    firstElement = mount(PostItem, {
      propsData: {
        post: {
          "userId": 10,
          "id": 91,
          "title": "aut amet sed",
          "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
        },
        index: 0,
        length: 5
      }
    });
    lastElement = mount(PostItem, {
      propsData: {
        post: {
          "userId": 10,
          "id": 91,
          "title": "aut amet sed",
          "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
        },
        index: 4,
        length:5,
      }
    });
  });

  afterEach(()=> {
    wrapper.destroy;
    firstElement.destroy;
    lastElement.destroy;
  });

  it('render component', () => {
    const comp = wrapper.find(".post-item").exists();
    expect(comp).toEqual(true);
    expect(comp).toEqual(true);
  });


  it('show up-arrow and down-arrow in middle index', () => {
    expect(wrapper.find('.up-arrow').exists()).toBe(true);
    expect(wrapper.find('.down-arrow').exists()).toBe(true);
  });



  it('show up-arrow but hide down-arrow in first index', () => {
    expect(lastElement.find('.up-arrow').exists()).toBe(true);
    expect(lastElement.find('.down-arrow').exists()).toBe(false);
  });
  it('hide up-arrow and show down-arrow in last index', () => {
    expect(firstElement.find('.up-arrow').exists()).toBe(false);
    expect(firstElement.find('.down-arrow').exists()).toBe(true);
  });
  it('press up arrow and after emit clickUp', async ()=> {
    await wrapper.find('.up-arrow').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clickUp');
  });

  it('press down arrow and after emit clickDown', async () => {
    await wrapper.find('.down-arrow').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clickDown');
  })
})
