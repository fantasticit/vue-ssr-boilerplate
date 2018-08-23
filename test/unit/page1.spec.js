import { shallow } from 'vue-test-utils'
import Page1 from '@/views/page1.vue'

test('Page 1', () => {
  const wrapper = shallow(Page1)
  const { vm } = wrapper // vm: vue component，在其中可以 取到 data methods 等属性

  const div = wrapper.find('div')
  expect(div.text()).toBe('Hello Page 1')
})
