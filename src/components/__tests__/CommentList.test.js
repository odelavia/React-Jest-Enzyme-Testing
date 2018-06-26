import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  const initialState = {
   comments: ['Comment 1', 'Comment 2']
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
})

afterEach(() => {
  component.unmount();
})

it('creates one LI element per comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('Comment 1');
  expect(component.render().text()).toContain('Comment 2');
});



// it('has a text area and a button', () => {
//   expect(component.find('textarea').length).toEqual(1)
//   expect(component.find('button').length).toEqual(1)
// });

// describe('the text area', () => {
//   beforeEach(() => {
//     component.find('textarea').simulate('change', {
//       target: { value: 'new comment' }
//     });
//     component.update();
//   });

//   it('has a text area that users can type in', () => {
//     expect(component.find('textarea').prop('value')).toEqual('new comment');
//   });

//   it('when form is submitted, text area gets emptied', () => {
//     expect(component.find('textarea').prop('value')).toEqual('new comment');
//     component.find('form').simulate('submit');
//     component.update();
//     expect(component.find('textarea').prop('value')).toEqual('');
//   });
// });