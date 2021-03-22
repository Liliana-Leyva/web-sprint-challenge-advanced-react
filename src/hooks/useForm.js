// write your custom hook here to control your checkout form

import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage'
import CheckoutForm from '../components/CheckoutForm'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

export const useForm = (initialValue, cb) => {
    // const [values, setValues] = useLocalStorage(initialValues)
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
      
      return [values, handleChanges, handleSubmit];
        
}