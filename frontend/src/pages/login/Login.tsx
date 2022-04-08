import React, { useState } from 'react'

import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'

import { Button } from '../../components/common'

import { LoginAPI } from 'api/LoginAPI'
import { useAppDispatch } from 'hooks/useAppDispatchAndSelector'
import { login } from 'store/reducers/userReducer'

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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmitForm = async (values: any): Promise<any> => {
    const res: any = await LoginAPI.login(values)
    if (typeof res === 'string') {
      setError(res)
      return { error: res }
    }
    setUserName(res.email)
    dispatch(login(res.name))
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
      // eslint-disable-next-line consistent-return
      onSubmitForm(values).then(res => {
        if (res?.email) {
          formik.resetForm()
          console.log('hello', res?.email)
          return <Navigate to="/profile" />
        }
        console.log(res?.error || 'Something went wrong')
      })
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            checked={formik.values.rememberMe}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...formik.getFieldProps('rememberMe')}
          />
          remember me
        </div>
        <Button type="submit">sign in</Button>
      </form>
    </div>
  )
}