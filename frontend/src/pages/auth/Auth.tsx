import React, { FC, useState } from 'react'

import { useFormik } from 'formik'

import { validatePassAndEmail } from '../../utils'

import { userApi } from 'api/userApi'
import { Input } from 'components/common/input/Input'
import { Button, FormWrapper, InputsWrapper } from 'styles'
import { AuthT } from 'types/UserType'

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
  const onSubmitForm = async (
    values: Omit<AuthT, 'rememberMe'>,
  ): Promise<handleResponseT> => {
    const res: AuthResponse = await userApi.register(values)
    if (typeof res === 'string') {
      return { error: res }
    }
    return { name: res.addedUser.name }
  }

  const formik = useFormik({
    validate: validatePassAndEmail,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: Omit<AuthT, 'rememberMe'>) => {
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
