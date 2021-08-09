import React from 'react';
import { MyComponent } from './my-component';

describe('test my component', () => {
  test('should return hello world div', () => {
    const myComponent = new MyComponent(null);
    const result = myComponent.render();
    expect(result).toStrictEqual(<div>Hello World</div>);
  });
});
