import React, { useState } from 'react'

import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { CheckBox } from '../../components/common/checkbox/CheckBox'
import { Paths } from '../../enums'
import { setUserData } from '../../store/reducers/userReducer'

import { LoginAPI } from 'api/LoginAPI'
import { Input } from 'components/common/input/Input'
import { useAppDispatch } from 'hooks/useAppDispatchAndSelector'
import { Button, FormWrapper, LinkStyle, InputsWrapper, HelpText } from 'styles'

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

type handleResponseT = {
  [key: string]: string
}

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = (): any => {
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmitForm = async (values: any): Promise<any> => {
    const res: any = await LoginAPI.login(values)
    if (typeof res === 'string') {
      setError(res)
      return { error: res }
    }
    dispatch(setUserData(res.email))
    return { name: res.email }
  }
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
    onSubmit: values => {
      console.log(values)
      // dispatch(setUserData(values))
      // eslint-disable-next-line consistent-return
      onSubmitForm(values).then(res => {
        if (res?.email) {
          formik.resetForm()
          console.log('hello', res?.email)
          navigate(Paths.Profile)
        }
        console.log(res?.error || 'Something went wrong')
      })
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
          id="password"
          label="Password"
          type="password"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password ? formik.errors.password : ''}
          showSecure
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
      <Button fullWidth mb="0" type="submit" onClick={() => navigate(Paths.Auth)}>
        Sign up
      </Button>
    </FormWrapper>
  )
}
