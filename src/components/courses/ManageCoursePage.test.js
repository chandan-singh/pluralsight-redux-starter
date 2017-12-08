import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import expect from 'expect';

import {ManageCoursePage} from './ManageCoursePage';

Enzyme.configure({adapter: new Adapter()});

describe('Manage course page', () => {
  it('sets error message when trying to save empty title', () => {
    let course = {
      id: '',
      watchHref: '',
      title: '',
      authorId: '',
      length: '',
      category: ''
    };

    const props = {
      authors: [],
      actions: {
        saveCourse: () => {
          return Promise.resolve();
        }
      },
      course: course
    };

    const wrapper = Enzyme.mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
  });
});
