import './index.css';

// demo to show lib to format numbers
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
let msg = `I would pay ${courseValue} for this awesome course!`;

document.write(msg);
