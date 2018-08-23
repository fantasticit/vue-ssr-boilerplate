import { shallow } from 'vue-test-utils'
import Page1 from '@/views/page1.vue'
import { createStore } from '@/store'

const store = createStore()

test('Page 1', () => {
  const wrapper = shallow(Page1, { store })
  const { vm } = wrapper // vm: vue component，在其中可以 取到 data methods 等属性

  const div = wrapper.find('div h1')
  expect(div.text()).toBe('Page 1')
})
