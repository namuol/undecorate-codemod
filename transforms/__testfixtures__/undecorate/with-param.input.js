import React from 'react';
import hoc1 from 'hoc1';

@hoc1('my-param')
export default class Thing extends React.Component {
  render() {
    return <div>Thing</div>;
  }
}
