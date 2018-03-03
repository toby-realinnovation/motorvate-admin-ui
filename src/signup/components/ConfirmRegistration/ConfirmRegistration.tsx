import * as React from 'react';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { RegistrationConfirmation } from '../../models';

interface ConfirmRegistrationProps {
  onSubmit: (confirmation: RegistrationConfirmation) => void;
}

interface ConfirmRegistrationState {
  username?: string;
  code?: string;
}

export default class extends React.Component<
  ConfirmRegistrationProps,
  ConfirmRegistrationState
> {
  constructor(props: ConfirmRegistrationProps) {
    super(props);
    this.state = {
      username: '',
      code: ''
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
      username: this.state.username || '',
      code: this.state.code || ''
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <FormControl>
              <Input
                id="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange('username')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <Input
                id="code"
                placeholder="Code"
                value={this.state.code}
                onChange={this.handleChange('code')}
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
