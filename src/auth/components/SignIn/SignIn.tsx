import * as React from 'react';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { AuthInfo } from '../../models';

interface SignInProps {
  onSubmit: (authenticationInfo: AuthInfo) => void;
}

interface SignInState {
  email?: string;
  password?: string;
}

export default class extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (prop: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      [prop]: event.target.value
    });
  };

  handleSubmit = () => (e: React.MouseEvent<HTMLFormElement>) => {
    this.props.onSubmit({
      username: this.state.email || '',
      password: this.state.password || ''
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <FormControl>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
            </FormControl>
          </div>
          <div>
            <Button
              variant="raised"
              color="primary"
              onClick={this.handleSubmit()}
            >
              Confirm
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
