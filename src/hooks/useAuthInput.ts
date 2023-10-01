import { useState, ChangeEvent } from 'react';

const EMAIL_REGEX = /^[\w_]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
const PW_REGEX =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

interface InputState {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  [key: string]: string; // index signature
}

const useInput = (initialValue: InputState) => {
  const [value, setValue] = useState<InputState>(initialValue);
  const [invalidCheck, setInvalidCheck] = useState<InputState>(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    handleOnCheck(name, value);
  };

  const checkRegex = (inputName: string, inputValue: string) => {
    let result: string = 'true';
    if (value[inputName].length === 0) {
      result = 'required';
    } else {
      switch (inputName) {
        case 'email':
          result = EMAIL_REGEX.test(inputValue) ? 'true' : 'invalidEmail';
          break;
        case 'username':
          result = 'true';
          break;
        case 'password':
          result = PW_REGEX.test(inputValue) ? 'true' : 'invalidPw';
          if (value['passwordConfirm']) {
            checkRegex('passwordConfirm', value['passwordConfirm']);
          }
          break;
        case 'passwordConfirm':
          result =
            inputValue === value['password'] ? 'true' : 'invalidConfirmPw';
          break;
        default:
          return;
      }
    }

    setInvalidCheck((prev) => ({ ...prev, [inputName]: result }));
    console.log('invalidCheck', invalidCheck);
  };

  const handleOnCheck = (inputName: string, inputValue: string) => {
    checkRegex(inputName, inputValue);
  };

  return { value, invalidCheck, handleOnChange, handleOnCheck };
};

export default useInput;
