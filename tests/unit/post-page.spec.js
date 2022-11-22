import { shallowMount,mount } from '@vue/test-utils'
import PostPage from '@/views/PostPage'
import PostBox from '@/components/PostBox'
import ActiontBox from '@/components/ActiontBox'
import api from "../../src/api/Post";
import data from "./data.json"
describe('PostPage.vue', () => {


  beforeEach(() => {
    api.getPosts = jest.fn().mockResolvedValue({data: [...data]});
  })



  it('render component', () => {
    let wrapper = null;
    wrapper = mount(PostPage)
    const comp = wrapper.find(".post-page").exists();
    expect(comp).toEqual(true);
  });
  it("default of page with data is correct", async () => {
    const wrapper = shallowMount(PostPage)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.posts).toHaveLength(5);
    expect(wrapper.vm.posts).toEqual(data);
    expect(wrapper.vm.actions).toHaveLength(0);
  })

  it("move second post to first position and add this action to actions", async () => {
    const wrapper = shallowMount(PostPage)
    await wrapper.vm.$nextTick()
    wrapper.findComponent(PostBox).vm.$emit("changePostOrder", 1, 0)
    expect(wrapper.vm.posts[0].id).toBe(2);
    expect(wrapper.vm.posts[1].id).toBe(1);
    expect(wrapper.vm.actions).toHaveLength(1);
    expect(wrapper.vm.actions[0].indexAction).toBe(0);
    expect(wrapper.vm.actions[0].firstIndex).toBe(1);
    expect(wrapper.vm.actions[0].secondIndex).toBe(0);


  })

  it("is time travel work well", async () => {
    const wrapper = shallowMount(PostPage)
    await wrapper.vm.$nextTick()
    wrapper.findComponent(PostBox).vm.$emit("changePostOrder", 1, 0)
    expect(wrapper.vm.actions).toHaveLength(1);
    wrapper.findComponent(ActiontBox).vm.$emit("actionTravel", 0)
    expect(wrapper.vm.actions).toHaveLength(0);
    expect(wrapper.vm.posts[0].id).toBe(1);
    expect(wrapper.vm.posts[1].id).toBe(2);
  })

})
