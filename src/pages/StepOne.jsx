import React, { useEffect, useState } from "react";
import { Heding } from "../component/UI/Heding";
import { Input } from "../component/UI/input";
import { Button } from "../component/UI/Button";
import { Span } from "../component/UI/span";




const StepOne = () => {
  const [nameValue, setNameValue] = useState()
  
  const [nameError, setNameError] = useState(false)


  useEffect( () => {
    if (!nameValue) {
      setNameError(true)
    }
    else {
      setNameError(false)
    }
  } )



  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <Span spanText={'Скидка за прохождение опроса'}/>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heding 
              headingTag={'h2'}
              headingText={'Занимательный вопрос'}/>
            <label className="input-wrapper">
              <Input 
                value={nameValue}
                onChange={setNameValue}
                hasError={nameError}
                id={'username'}
                isRequired={true}
                inputError={'Задайте вопрос брат'}
                inputType={'text'}
                inputPlaceholder={'Ваш ответ'}/>
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <Button buttonType={'submit'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;

