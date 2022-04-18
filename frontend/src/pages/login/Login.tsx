import React, { FC } from 'react'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CheckBox } from 'components/common/checkbox/CheckBox'
import { Input } from 'components/common/input/Input'
import { Paths } from 'enums'
import { loginThunk } from 'store/thunks/loginThunks'
import { Button, FormWrapper, HelpText, InputsWrapper, LinkStyle } from 'styles'
import { validatePassAndEmail } from 'utils'

export const Login: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: 'a@mail.com',
      password: 'qwerty123',
      rememberMe: true,
    },
    validate: values => validatePassAndEmail(values),
    onSubmit(values) {
      dispatch(loginThunk(values))
    },
  })

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <InputsWrapper>
        <Input
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email ? formik.errors.email : ''}
          fullWidth
        />
        <Input
          name="password"
          label="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password ? formik.errors.password : ''}
          fullWidth
        />
      </InputsWrapper>
      <CheckBox
        {...formik.getFieldProps('rememberMe')}
        labelTitle="Remember me:"
        type="checkbox"
        autoComplete="on"
      />
      <Button fullWidth mb="0" type="submit">
        Sign in
      </Button>
      <LinkStyle to={Paths.RestorePassword}>Forgot Password</LinkStyle>
      <HelpText>Do not have an account?</HelpText>
      <Button fullWidth mb="0" onClick={() => navigate(Paths.Auth)}>
        Sign up
      </Button>
    </FormWrapper>
  )
}
