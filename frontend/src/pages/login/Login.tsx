import React, { FC, useState } from 'react'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Paths } from 'enums'
import { loginThunk } from 'store/thunks/loginThunks'
import { CheckBox } from 'components/common/checkbox/CheckBox'
import { Input } from 'components/common/input/Input'
import { useAppDispatch } from 'hooks/useAppDispatchAndSelector'
import { loginThunk as lTh } from 'store/thunks/userThunks/loginThunks'
import { Button, FormWrapper, HelpText, InputsWrapper, LinkStyle } from 'styles'

const MIN_PASS_LENGTH = 7

type AuthResponse =
  | {
      addedUser: {
        _id: string
        email: string
        rememberMe: boolean
        isAdmin: boolean
        name: string
        verified: boolean
        publicCardPacksCount: number
        created: string
        updated: string
        __v: number
      }
    }
  | string

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: 'nya-admin@nya.nya',
      password: '1qazxcvBG',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }

      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < MIN_PASS_LENGTH) {
        errors.password = 'Password should be longer than 7 letters'
      }
      return errors
    },
    onSubmit(values) {
      // @ts-ignore
      dispatch(loginThunk(values))
      navigate('/profile')
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
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
        <Input
          name="password"
          label="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email ? formik.errors.email : ''}
          fullWidth
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
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
      <Button fullWidth mb="0" type="submit" onClick={() => navigate(Paths.Auth)}>
        Sign up
      </Button>
    </FormWrapper>
  )
}
