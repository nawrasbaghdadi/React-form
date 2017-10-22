import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <form className="main-form"
         onSubmit={this.handleSubmit.bind(this)}
          id="formv">
          <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange.bind(this)} />
            <p className="error-msg">Please enter name</p>
             <div className="form-group">
                <select className="btn btn-default" 
                        value ={this.state.sex}
                        onChange = {this.changeSex}
                    >
                <option value="">chose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
           
            <button type="submit" value="send" className="btn btn-default">Send</button>
            </div>
            </form>
        </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex : this.props.sex || ''
    };
    this.changeSex = this.changeSex.bind(this);
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }


  changeSex(e){
    const slectedSex = e.target.options[e.target.selectedIndex].value;
   this.setState({
    sex : slectedSex
   });
  }
    handleSubmit (e) {
    e.preventDefault();
    const formv= document.getElementById('formv');
    const name = this.state.name.trim();
    const sex = this.state.sex;
    if(name === ''){
      formv.classList.add('notvalid');
    }else{
      (formv.classList.contains('notvalid') ? formv.classList.remove('notvalid') : '')
      this.props.addFriend(name,sex);
      this.setState({ 
        name: '', 
        sex : ''
      });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
