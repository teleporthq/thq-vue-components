import { mount } from '@vue/test-utils'
import DangerousHTML from './index.vue'

describe('DangerousHTML test', () => {
  it('renders the provided HTML', () => {
    const html = '<span>Test HTML</span>'
    const wrapper = mount(DangerousHTML, {
      propsData: {
        html,
      },
    })

    expect(wrapper.html()).toContain(html)
  })

  it('does not render anything if no HTML is provided', () => {
    const wrapper = mount(DangerousHTML)
    expect(wrapper.isEmpty()).toBe(true)
  })
})
