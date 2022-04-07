import React, { FC } from 'react'

import { useFormik } from 'formik'

import { Button } from '../../components/common'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = () => {
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
      } else if (values.password.length < 3) {
        errors.password = 'Password should be bigger'
      }
      return errors
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
      formik.resetForm()
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
