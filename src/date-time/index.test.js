import { mount } from '@vue/test-utils'
import DateTimePrimitive from './index.vue'

describe('DateTimePrimitive', () => {
  it('renders correctly with default format', () => {
    const wrapper = mount(DateTimePrimitive, {
      propsData: {
        date: '2023-07-03T00:00:00Z',
      },
    })

    expect(wrapper.find('span').text()).toBe('03/07/2023')
  })

  it('renders correctly with custom format', () => {
    const wrapper = mount(DateTimePrimitive, {
      propsData: {
        date: 'Mon Jul 03 2023 14:45:09 GMT+0300 (Eastern European Summer Time)',
        format: 'MM-DD-YYYY',
      },
    })

    expect(wrapper.find('span').text()).toBe('07-03-2023')
  })

  it('updates the formatted date when the prop `date` changes', async () => {
    const wrapper = mount(DateTimePrimitive, {
      propsData: {
        date: '2023-07-03T00:00:00Z',
      },
    })

    expect(wrapper.find('span').text()).toBe('03/07/2023')
    await wrapper.setProps({ date: '2023-07-04T00:00:00Z' })
    expect(wrapper.find('span').text()).toBe('04/07/2023')
  })

  it('updates the formatted date when the prop `format` changes', async () => {
    const wrapper = mount(DateTimePrimitive, {
      propsData: {
        date: '2023-07-03T00:00:00Z',
      },
    })

    expect(wrapper.find('span').text()).toBe('03/07/2023')
    await wrapper.setProps({ format: 'MM-DD-YYYY' })
    expect(wrapper.find('span').text()).toBe('07-03-2023')
  })
})
