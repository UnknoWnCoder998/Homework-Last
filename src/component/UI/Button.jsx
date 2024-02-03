import React from "react";


export const Button= ({buttonText='Далее', buttonType , isDisabled, onClick }) => {
    return(
        <button disabled={isDisabled} onClick={onClick} type={buttonType==='submit'? 'submit':'button'} id="next-btn">
            {buttonText}    
        </button>
    )
};