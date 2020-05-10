import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';



class RegisterForm extends Component{
    render(){
        return(<div>
            <form>
  					<label>
    				שם מלא (בעברית):
    				<input type="text" name="fullname" />
  					</label>
                      
                      
                    <label>
    				מס' ת.ז:
    				<input type="text" name="id" />
  					</label>

                    <label>
    				כתובת:
    				<input type="text" name="adress" />
                    
  					</label>


                      <label for="gender">מין:</label>
                    <select id="gender">
                        <option value="male">זכר</option>
                        <option value="female">נקבה</option>
                    </select>

  				    <input type="submit" value="שלח הרשמה" />
			</form>
            </div>
        )
    } 
}

ReactDOM.hydrate(<RegisterForm />, document.getElementById('root'));