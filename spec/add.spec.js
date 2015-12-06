import { expect } from 'chai';

import add from '../src/';

describe('add', () => {
  it('should be able to sum 2 integer values', () => {
    expect(add(2, 4)).to.be.equal(6);
  });
});
