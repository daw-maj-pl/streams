import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
    // this.props.history.push('/');
    // Jeśli tutaj wstawimy push('/') to w przypadku erroru i tak przeniesie nas na strone główną. Jeśli tego nie chcemy musimy użyć history.push('/') w action creators.
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
