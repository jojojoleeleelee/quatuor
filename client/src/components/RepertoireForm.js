import React, { Component } from 'react';

export default class RepertoireForm extends Component {

  render() {
    return(
      <div>
        <h1>Add a new repertoire!</h1>
          <form>
            <label for="title">Repertoire Title</label>
            <br />
            <input type="text" name="title"/>
            <br />

            <label for="key-center">Repertoire Key</label>
            <br />
            <input type="text" name="key-center"/>
            <br />

            <label for="key">Major or Minor?</label>
            <br />
            <input type="text" name="key"/>
            <br />

            <label for="composer">Repertoire Composer</label>
            <br />
            <input type="text" name="composer"/>
            <br />

            <label for="score">Repertoire Score</label>
            <br />
            <input type="text" name="score"/>
            <br />

            <label for="performance">Repertoire Performance</label>
            <br />
            <input type="text" name="performance"/>
            <br />

            <button> Submit
            </button>
            <br />
          </form>
      </div>
    )
  }
}
