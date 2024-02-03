import React from "react";

export const Input = ({ inputLabel,
    id,
    isRequired,
    inputType,
    inputPlaceholder,
    inputError,
    value,
    hasError,
    onChange
}) => {
    return (
        <label className={`input-wrapper ${hasError && "_error"}`} htmlFor="username">
            {inputLabel}
            <input
                required={isRequired}
                type={inputType}
                name={id}
                id={id}
                placeholder={inputPlaceholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {hasError && <span id="error-message">{inputError} </span>}
        </label>
    )
}