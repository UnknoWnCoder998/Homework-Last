import React from "react";

export const Heding = ({headingText, headingTag}) => {
    const Headingtype = () => {
        switch (headingTag) {
            case "h1":
                return <h1>{headingText}</h1>
            case "h2":
                return <h2>{headingText}</h2>   
            case "h3":
                return <h3>{headingText}</h3>
            case "h4":
                return <h4>{headingText}</h4>
            default:
                return <h1>{headingText}</h1>
        }
    };
    return Headingtype()
};


