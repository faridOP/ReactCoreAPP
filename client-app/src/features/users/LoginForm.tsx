import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Label,Header } from "semantic-ui-react";
import CustomTextInput from "../../app/common/form/CustomTextInput";
import { useStore } from "../../app/stores/store";

function LoginForm() {

  const {userStore} = useStore();

  return<Formik
  initialValues={{email: '', password: '', error: null}}
  onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
      setErrors({error: error.response.data}))}
>
  {({handleSubmit, isSubmitting, errors}) => (
      <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
          <Header as='h2' content='Login to Reactivites' color='teal' textAlign='center' />
          <CustomTextInput name='email' placeholder='Email' />
          <CustomTextInput name='password' placeholder='Password' type='password' />
          <ErrorMessage 
              name='error' render={() => 
              <Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}
          />
          <Button loading={isSubmitting} positive content='Login' type='submit' fluid />
      </Form>
  )}
</Formik>
}

export default observer(LoginForm);