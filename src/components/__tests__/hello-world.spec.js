import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import helloWorld from '../hello-world.vue'

describe('fancyText', () => {
  it('renders properly', async () => {
    expect(helloWorld).toBeTruthy()
    const wrapper = mount(helloWorld, { props: { msg: 'Amazing' } })
    expect(wrapper.text()).toContain('Amazing')
  })

  it('renders properly', async () => {
    const wrapper = mount(helloWorld, { props: { msg: 'Amazing' } })
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('Count is: 1')
  })
})
