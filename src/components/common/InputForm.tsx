import React, { useState } from 'react';
import Eye from '../../assets/icons/Eye.svg';
import EyeSlash from '../../assets/icons/EyeSlash.svg';
interface InputFormProps {
    type?: string;
    placeholder: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
}
function InputForm({ type = 'text', placeholder, leftIcon, rightIcon }: InputFormProps) {
    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = () => {
      setInputType((prevType : string) => (prevType === 'password' ? 'text' : 'password'));
    };
    return (
        <div className="relative inline-block justify-center items-center py-3 px-5 bg-textW rounded-[1.25rem]">
            <div className="flex  items-center">
                {leftIcon && <span className="absolute left-9 mr-4">{leftIcon}</span>}
                <div className="ml-12"><input type={inputType} className=" placeholder:text-bg focus:outline-none mr-4 w-[80%] text-bg  " placeholder={placeholder} /></div>
                {type === 'password' && (
                    <button className='inline-block box-border	' onClick={togglePasswordVisibility} >
                        {inputType === 'password' ? <img src={Eye} alt="" /> :  <img src={EyeSlash} alt="" /> }
                    </button>
                )}
                {rightIcon && <span className="ml-4">{rightIcon}</span>}
            </div>

        </div>
    )
}
export default InputForm
