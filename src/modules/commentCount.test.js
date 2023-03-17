/**
 * @jest-environment jsdom
 */
import commentCounter from './commentCount.js';

document.body.innerHTML = '';

describe('Test commentCounter', () => {
  test('Test empty comment', () => {
    expect(commentCounter()).toBe(0);
  });

  test('Test for 1 comment', () => {
    document.body.innerHTML = `<div class="comments-container">
    <p>test comment 1</p>
    </div>`;
    expect(commentCounter()).toBe(1);
  });

  test('Test for 2 comments', () => {
    document.body.innerHTML = `<div class="comments-container">
    <p>test comment 1</p>
    <p>test comment 1</p></div>`;
    expect(commentCounter()).toBe(2);
  });

  test('Test for 3 comments', () => {
    document.body.innerHTML = `<div class="comments-container">
    <p>test comment 1</p>
    <p>test comment 2</p>
    <p>test comment 3</p><div class="meal">
    </div>`;
    expect(commentCounter()).toBe(3);
  });
});
