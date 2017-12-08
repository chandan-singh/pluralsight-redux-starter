import React, { Component } from 'react';

class AboutPage extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">About</h1>
              <p className="lead">This app was built while practising Pluralsight course: https://app.pluralsight.com/library/courses/react-redux-react-router-es6</p>
              <p className="lead">Starter kit is located <a className="btn btn-primary" href="https://github.com/coryhouse/pluralsight-redux-starter" role="button">Pluralsight Redux Starter</a> at: https://github.com/coryhouse/pluralsight-redux-starter</p>
          </div>
        </div>
        <p/><p/>
        <p className="text-center">
  The MIT License (MIT)

  Copyright (c) 2015 Cory House

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

        </p>
      </div>
    );
  }

}

export default AboutPage;
