import { Component } from 'react';
import { signUp } from '../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{fontFamily: 'Pacifico, cursive'}}>PlotPoint Books</h2>
          </div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="bg-white rounded-md shadow-md p-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 mt-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 mt-4">
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 mt-4">
              <div>
                <label htmlFor="confirm" className="sr-only">Confirm</label>
                <input type="password" name="confirm" id="confirm" value={this.state.confirm} onChange={this.handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" disabled={disable} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">SIGN UP</button>
            </div>
          </form>
        </div>
        <p className="error-message text-center mt-4">{this.state.error}</p>
      </div>
    );
  }
}  
