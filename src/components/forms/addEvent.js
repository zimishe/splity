/**
 * Created by eugene on 06/09/17.
 */

import React, { Component } from 'react'
import Datetime from 'react-datetime'

import AddUserForm from './addUser'
import { addEventData } from './../../actions/addEvent'

class AddEventForm extends Component {
    createRoom(e) {
        let date = new Date(document.getElementById('new_event_date').value),
            description = document.getElementById('new_event_description').value;

        addEventData(e, date, description)
    }
    
    toggleForm() {
        let form = document.querySelector('.add-event__form');
        
        if (form !== null) {
            form.classList.toggle('add-event__form--visible');
        }
    }
    
    render() {
        let inputFromProps = {
                placeholder : 'Дата:',
                name: 'new_event_date',
                required: 'required',
                id: 'new_event_date'
            };
        
        
        return (
            <div className="add-event">
                <button className="add-event__toggle" onClick={this.toggleForm}>Додати подію</button>
                <form className="add-event__form"
                      onSubmit={this.createRoom}
                >
                    <label>
                        <span>Дата:</span>
                        <Datetime inputProps={inputFromProps}
                                  name="new_event_date"
                                  dateFormat='YYYY-MM-DD'
                                  timeFormat = {false}
                                  defaultValue = {new Date()}
                        />
                    </label>
                    <label>
                        <span>Опис:</span>
                        <input type="text"
                               placeholder="Опис події"
                               id="new_event_description" 
                               required
                        />
                    </label>
                    <AddUserForm users={this.props.users} />
                    <div className="add-event__form__controls">
                        <button>Створити</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddEventForm