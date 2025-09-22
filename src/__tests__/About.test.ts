import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import About from '../components/About.vue'

describe('About.vue', () => {
  it('renders the initial message', () => {
    const wrapper = mount(About);
    expect(wrapper.text()).toContain('About Me');
   
    
  });


});
