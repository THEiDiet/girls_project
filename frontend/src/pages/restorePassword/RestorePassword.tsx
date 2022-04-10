/*eslint-disable*/
import React, { ChangeEvent, FC, useState } from 'react'

import { userApi } from 'api/userApi'
import { Input } from 'components/common/input/Input'
import { Button, FormWrapper, InputsWrapper } from 'styles'
import { useLoader } from 'hooks/useLoader'

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
    if(email && email.length > MIN_EMAIL_LENGTH){
      startFetching()
      const res = await userApi.forgot('log.m3.baby@gmail.com')
      setResponse(res.info)
      stopFetching()
    }
  }

  return (
    <FormWrapper>
      <InputsWrapper>
        <Input
            name="email"
            label="Email"
            onChange={handleChange}
            value={email}
            fullWidth
        />
      </InputsWrapper>
      <Button onClick={restorePassword}>Restore</Button>
      {isFetching && <span>Loading...</span>}
      {error || response}
    </FormWrapper>
  )
}
