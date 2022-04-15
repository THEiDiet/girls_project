import React, { FC, useState } from 'react'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Paths } from 'enums'
import { loginThunk } from 'store/thunks/loginThunks'
import { Button } from 'styles'

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

type FormikErrorT = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login: FC = () => {
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmitForm = async (values: any): Promise<any> => {
    // const res: any = await LoginAPI.login(values)
    dispatch(loginThunk(values))
    // if (typeof res === 'string') {
    //   setError(res)
    //   return { error: res }
    // }
    // dispatch(setUserData(res))
    // return { name: res.email }
  }
  const formik = useFormik({
    initialValues: {
      email: 'nya-admin@nya.nya',
      password: '1qazxcvBG',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorT = {}
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
        navigate(Paths.Profile)
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
