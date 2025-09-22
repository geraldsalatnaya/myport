import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Home from '../components/Home.vue'

describe('Home.vue', () => {
  it('renders the initial message', () => {
    const wrapper = mount(Home);
    expect(wrapper.text()).toContain('Hello, my name is Gerald. Welcome to my personal page lets begin shall we?');
   
    
  });


});
