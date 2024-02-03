import React, { useEffect, useState } from "react";
import { Heding } from "../component/UI/Heding";
import { Button } from "../component/UI/Button";
import { Input } from "../component/UI/input";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)


  // const clickHandler = () =>{
  //   if(!nameValue) {
  //     setNameError(true)
  //   }
  //   else {
  //     setNameError(false)
  //   }
  //   if(!phoneValue) {
  //     setPhoneError(true)
  //   }
  //   else {
  //     setPhoneError(false)
  //   }
  // }





  useEffect( ()=> {
    if(!nameValue){
      setNameError(true)
    }
    else {
      setNameError(false)
    }
  }, [nameValue, phoneValue] )

  useEffect( ()=> {
    if(!phoneValue){
      setPhoneError(true)
    }
    else {
      setPhoneError(false)
    }
  }, [nameValue, phoneValue] )



  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heding headingText='Добро пожаловать в квиз от лучшего учебного центра' />
          <form className="welcome__form">
            <Input 
            hasError={nameError}
            value={nameValue}
            onChange={setNameValue}
            inputType={'text'}
            inputLabel={'Ваше имя'}
            id={"username"} 
            inputPlaceholder="Ваш ответ" 
            isRequired={true}
            inputError={'Введите свое имя'} 
            />
            <Input
            hasError={phoneError}
            inputError={'Введите свой номер'}
            inputLabel={'Ваш номер'}
            value={phoneValue}
            onChange={setPhoneValue}
            inputType={'tel'}
            id={'phone'}
            inputPlaceholder={"+998 9- --- -- -- "}

            />
            <Button buttonType={'submit'} isDisabled={false} buttonText='Далее' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
