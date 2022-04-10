import React, { FC, useState } from 'react'

import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom'

import { validatePassAndEmail } from '../../utils'

import { userApi } from 'api/userApi'
import { Input } from 'components/common/input/Input'
import { Paths } from 'enums/Paths'
import { FormWrapper, Button, InputsWrapper } from 'styles'
import { AuthT } from 'types/UserType'

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

export const Auth: FC = () => {
  const [isSecurity, setIsSecurity] = useState(false)
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmitForm = async (
    values: Omit<AuthT, 'rememberMe'>,
  ): Promise<handleResponseT> => {
    debugger
    const res: AuthResponse = await userApi.register(values)
    if (typeof res === 'string') {
      setError(res)
      return { error: res }
    }
    setUserName(res.addedUser.name)
    return { name: res.addedUser.name }
  }

  const formik = useFormik({
    validate: validatePassAndEmail,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: Omit<AuthT, 'rememberMe'>) => {
      debugger
      onSubmitForm(values).then((res: handleResponseT) => {
        if (res?.name) {
          formik.resetForm()
          console.log('hello', res?.name)
        } else console.log(res?.error || 'Something went wrong')
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
      <Button fullWidth mb="0" type="submit">
        Auth
      </Button>
    </FormWrapper>
  )
}
