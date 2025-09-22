import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Project from '../components/Project.vue'

describe('Project.vue', () => {
  it('renders the initial message', () => {
    const wrapper = mount(Project);
    expect(wrapper.text()).toContain('Project');
   
    
  });


});
