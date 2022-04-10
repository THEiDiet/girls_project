/*eslint-disable*/
import React, { ChangeEvent, FC, useState } from 'react'

import { userApi } from 'api/userApi'
import { Input } from 'components/common/input/Input'
import { Button, FormWrapper, InputsWrapper } from 'styles'
import { useLoader } from 'hooks/useLoader'
import { useFormik } from "formik";
import { AuthT } from "../../types";
import { validateEmail } from "../../utils";

const MIN_EMAIL_LENGTH = 6

export const RestorePassword: FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [response, setResponse] = useState<any>(null)
  const { isFetching, startFetching, stopFetching } = useLoader()

  const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value)
  }

  const restorePassword = async () => {
      startFetching()
      const res = await userApi.forgot('log.m3.baby@gmail.com')
      setResponse(res.info)
      stopFetching()
  }
  const formik = useFormik({
    validate:(values)=>  validateEmail(values.email) as Pick<AuthT,'email'>,
    initialValues: {
      email: '',
    },
    onSubmit: (values:  Pick<AuthT, 'email'>) => {
      restorePassword()
      },
  })
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <InputsWrapper>
        <Input
            name="email"
            label="Email"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email ? formik.errors.email : ''}
        />
      </InputsWrapper>
      <Button fullWidth mb="0" type="submit">Restore</Button>
      {isFetching && <span>Loading...</span>}
      {error || response}
    </FormWrapper>
  )
}
