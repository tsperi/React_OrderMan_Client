/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description A pure functional component that renders a reusable text input.
 *
 * @description This component is used with Redux Form.
 *
 * @description It should display a label and text input with an optional validation message.
 *
 * PropTypes = {
 *   disabled: PropTypes.bool,
 *   input: PropTypes.any.isRequired,
 *   label: PropTypes.string,
 *   placeholder: PropTypes.string,
 *   type: PropTypes.string,
 * };
 *
 * DefaultProps = {
 *   disabled: false,
 *   label: '',
 *   placeholder: '',
 *   type: 'text',
 * };
 *
 * @exports The pure functional component
 */


// Module imports
import React from 'react';
import PropTypes from 'prop-types';


/**
 * @function renderTextField
 * @description Renders a Bootstrap form input
 *
 * @param input
 * @param label
 * @param placeholder
 * @param disabled
 * @param type
 */
const renderTextField = ({ input, label, placeholder, disabled, type }) => (
  <div className="form-group">
    {(() => {
      if (label) {
        return (
          <label
            className="control-label"
          >
            {label}
          </label>
        );
      }
      return null;
    })()}
    <input
      autoComplete="off"
      className="form-control"
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      {...input}
    />
  </div>
);


renderTextField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};


renderTextField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  type: 'text',
};


export default renderTextField;
