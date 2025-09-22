import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Contact from '../components/Contact.vue'

describe('Contact.vue', () => {
  it('renders the initial message', () => {
    const wrapper = mount(Contact);
    expect(wrapper.text()).toContain('Contact');
   
    
  });


});
