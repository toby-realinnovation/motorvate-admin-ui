import * as React from 'react';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { Registrant } from '../../models';

interface SignUpProps {
  onSubmit: (registrant: Registrant) => void;
}

interface SignUpState {
  name?: string;
  birthdate?: string;
  gender?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export default class extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      name: '',
      birthdate: '',
      gender: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    };

    // this.handleSubmit = this.handleChange.bind(this);
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
      name: this.state.name || '',
      birthdate: this.state.birthdate || '',
      gender: this.state.gender || '',
      email: this.state.email || '',
      phoneNumber: this.state.phoneNumber || '',
      password: this.state.password || '',
      confirmPassword: this.state.confirmPassword || ''
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <FormControl>
              <Input
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <Input
                id="phoneNumber"
                placeholder="Phone"
                value={this.state.phoneNumber}
                onChange={this.handleChange('phoneNumber')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <Input
                id="birthdate"
                placeholder="Birthdate"
                value={this.state.birthdate}
                onChange={this.handleChange('birthdate')}
              />
            </FormControl>
            <FormControl>
              <Input
                id="gender"
                placeholder="Gender"
                value={this.state.gender}
                onChange={this.handleChange('gender')}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <Input
                id="email"
                placeholder="Email"
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
            <FormControl>
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange('confirmPassword')}
              />
            </FormControl>
          </div>
          <div>
            <Button
              variant="raised"
              color="primary"
              onClick={this.handleSubmit()}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
