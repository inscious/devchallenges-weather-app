import React, { useState } from 'react'

const Form = () => {
    const [location, setLocation] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Search Location..."
                aria-label='location'
            />
            <button type='submit' className='' onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

export default Form;