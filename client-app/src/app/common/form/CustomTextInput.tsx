import { useField } from 'formik';
import React from 'react'
import { Form, Label } from 'semantic-ui-react';

interface Props{
    placeholder:string;
    name:string;
    label?:string;
    type?:string
}

export default function CustomTextInput(props:Props) {
  const [field, meta] = useField(props.name);
    return(
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error?(
                <Label basic color='red' style={{marginTop:10}} content={meta.error} />
            ):null}
        </Form.Field>
    )
}
