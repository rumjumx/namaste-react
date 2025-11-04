const heading1 = React.createElement(
  'h1',
  {
    key: 'heading1',
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
    key: 'heading2',
    id: 'hello',
    'data-id': 'xing',
    className: 'h1',
    style: { background: 'red', padding: 5, borderRadius: 5 },
  },
  'Hello World from ',
  React.createElement('em', {}, 'Heading 2!')
);

const child1 = React.createElement(
  'div',
  {
    key: 'child1',
    id: 'child',
  },
  [heading1, heading2]
);
const child2 = React.createElement('div', { key: 'child2', id: 'child' }, [
  heading1,
  heading2,
]);

const parent = React.createElement(
  'div',
  {
    id: 'parent',
  },
  [child1, child2]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
