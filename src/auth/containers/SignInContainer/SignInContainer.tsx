import * as React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { SignIn } from '../../components';
import { AuthInfo } from '../../models';

interface SignInContainerProps {
  signIn: (authInfo: AuthInfo) => any /* tslint:disable-line */;
}

class SignInContainer extends React.Component<SignInContainerProps> {
  constructor(props: SignInContainerProps) {
    super(props);

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(authInfo: AuthInfo) {
    if (this.props.signIn) {
      this.props.signIn(authInfo);
    }
  }

  render() {
    return (
      <div>
        <SignIn onSubmit={this.handleSignIn} />
      </div>
    );
  }
}

export default connect(null, { signIn })(SignInContainer);
