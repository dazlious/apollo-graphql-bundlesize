import React from 'react';
import ReactDOM from 'react-dom';
import { graphql } from '@apollo/client/react/hoc';

import query from './query.graphql';

const Foo = () => {
  const t = graphql(query);
  console.log(t);
  return <div>Foo</div>;
};

ReactDOM.render(<Foo />, document.getElementById('root'));
