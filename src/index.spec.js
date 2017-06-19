import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('index.js', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


// test the DOM
  // since this is an async test, requires 'done' callback
describe('index.html', () => {
  it('should have hello text', (done) => {
    // hold reference to index.html in memory
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    // arg2 is a virtual DOM in memory
    jsdom.env(index, (err, window) => {
      // window is virtualDOM window
      const h1 = window.document.getElementsByTagName('h1')[0];
      const text = 'data processing...';
      expect(h1.innerHTML).to.equal(text);

      done(); // async way of handling

      window.close(); // now freeup memory
    });
  });
});
