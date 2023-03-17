/**
 * @jest-environment jsdom
 */
import itemCounter from './itemsCount.js';

document.body.innerHTML = '';

describe('Test itemCounter', () => {
  test('Test empty content', () => {
    expect(itemCounter()).toBe(0);
  });

  test('Test for 1 item', () => {
    document.body.innerHTML = '<div class="meal"></div>';
    expect(itemCounter()).toBe(1);
  });

  test('Test for 2 items', () => {
    document.body.innerHTML = '<div class="meal"></div><div class="meal"></div>';
    expect(itemCounter()).toBe(2);
  });
});
