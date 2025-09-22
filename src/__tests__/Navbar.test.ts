import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar.vue'

describe('Navbar.vue', () => {
  it('renders the initial message', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.text()).toContain('imGegeg;');
   
    
  });


});
