/**
 * Created by eugene on 05/30/17.
 */

import React from 'react'

const DonateForm = ({onSubmit}) => {
    return (
        <form className="event-detailed__donate" onSubmit={onSubmit}>
            <input type="text"
                   name="donation_description"
                   placeholder="Опис"
                   required
            />
            <input type="number"
                   name="donation_amount"
                   placeholder="Сума"
                   min='0'
                   required
            />
            {/*<label>*/}
                {/*<input type="checkbox" name="donation_isExcluded" />*/}
                {/*<span>Порахувати окремо</span>*/}
            {/*</label>*/}
            <button>+</button>
        </form>
    )
};

export default DonateForm
