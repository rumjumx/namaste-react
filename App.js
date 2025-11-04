const heading1 = React.createElement(
  'h1',
  {
    id: 'hello',
    'data-id': 'xing',
    className: 'h1',
    style: { background: 'red', padding: 5, borderRadius: 5 },
  },
  'Hello World from ',
  React.createElement('em', {}, 'Heading 1!')
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'hello',
    'data-id': 'xing',
    className: 'h1',
    style: { background: 'red', padding: 5, borderRadius: 5 },
  },
  'Hello World from ',
  React.createElement('em', {}, 'Heading 2!')
);

const child = React.createElement(
  'div',
  {
    id: 'child',
  },
  [heading1, heading2]
);

const parent = React.createElement(
  'div',
  {
    id: 'parent',
  },
  [child, child]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
