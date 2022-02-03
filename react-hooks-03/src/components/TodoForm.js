import React,{useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    function handleValueChange(e){
        const targetInput = e.target.value;
        setValue(targetInput);
    }

    function handleSubmit(e){
        //prevent reloading browser
        e.preventDefault();

        const formValue = {
            title: value
        }

        onSubmit(formValue);

        setValue('');
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleValueChange}/>
                {/* <input type="text" value={value2}/> */}
            </form>
        </div>
    );
}

export default TodoForm;