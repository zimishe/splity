/**
 * Created by eugene on 06/09/17.
 */

import React, { Component } from 'react'
import Datetime from 'react-datetime'

import AddUserForm from './addUser'

class AddEventForm extends Component {
    render() {
        let inputFromProps = {
                placeholder : 'Дата:',
                name: 'new_event_date',
                required: 'required',
                id: 'new_event_date'
            };
        
        return (
            <div className="add-event">
                <button className="add-event__toggle">Додати подію</button>
                <form className="add-event__form add-event__form--visible">
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
                        <input type="text" placeholder="Опис події"/>
                    </label>
                    <AddUserForm />
                    <div className="add-event__form__controls">
                        <button>Створити</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddEventForm