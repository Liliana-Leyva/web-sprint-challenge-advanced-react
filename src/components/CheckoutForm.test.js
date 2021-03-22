import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

//testing the checkout form
test("CheckoutForm", ()=> {
    render(<CheckoutForm errors={[]}/>);
})


test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});


test ("CheckoutForm adds the inputs data when the form is submitted", ()=> {
    render(<CheckoutForm errors={[
    ]}/>);
    
} )