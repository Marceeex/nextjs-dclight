import React, { Component } from 'react';
import Head from 'next/head'

class Exercise extends Component {

  componentDidMount () {
    // The DOM manipulation inside DCL depends on angular.element being bound to
    // a global jQuery instead of the built-in jqLite.
    if (window) {
      window.jQuery = require('jquery');
      window.$ = window.jQuery;
    }
  };

  render () {
    return (
      <div>
        <Head>
          <script src="http://localhost:3003/datacamp-light-latest.min.js"></script>
        </Head>
        {this.props.children}
      </div>
    );
  }

}

export default Exercise;
