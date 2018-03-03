import * as React from 'react';
import { connect } from 'react-redux';
import { confirmRegistration, registerUser } from '../../actions';
import { Registrant, RegistrationConfirmation } from '../..';
import { ConfirmRegistration, SignUp } from '../../components';

interface SignUpContainerProps {
  registerUser: (registrant: Registrant) => any /* tslint:disable-line */;
  confirmRegistration: (
    confirmation: RegistrationConfirmation
  ) => any /* tslint:disable-line */;
}

class SignUpContainer extends React.Component<SignUpContainerProps> {
  constructor(props: SignUpContainerProps) {
    super(props);

    this.handleConfirmation = this.handleConfirmation.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleConfirmation(confirmation: RegistrationConfirmation) {
    if (this.props.confirmRegistration) {
      this.props.confirmRegistration(confirmation);
    }
  }

  handleRegister(registrant: Registrant) {
    if (this.props.registerUser) {
      this.props.registerUser(registrant);
    }
  }

  render() {
    return (
      <div>
        <SignUp onSubmit={this.handleRegister} />
        <ConfirmRegistration onSubmit={this.handleConfirmation} />
      </div>
    );
  }
}

export default connect(null, { confirmRegistration, registerUser })(
  SignUpContainer
);
