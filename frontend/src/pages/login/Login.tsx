import React, { useState } from 'react'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LoginAPI } from '../../api/LoginAPI'
import { Button } from '../../components/common'

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

export const Login = () => {
  // const [isSecurity, setIsSecurity] = useState(false)
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmitForm = async (values: any): Promise<any> => {
    const res: AuthResponse = await LoginAPI.login(values)
    if (typeof res === 'string') {
      setError(res)
      return { error: res }
    }
    setUserName(res.addedUser.email)
    return { name: res.addedUser.email }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
          <input {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <input {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            checked={formik.values.rememberMe}
            {...formik.getFieldProps('rememberMe')}
          />
          remember me
        </div>
        <Button type="submit">sign in</Button>
      </form>
    </div>
  )
}
