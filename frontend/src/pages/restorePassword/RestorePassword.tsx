/*eslint-disable*/
import React, { ChangeEvent, FC, useState } from 'react'

import { userApi } from 'api/userApi'
import { CustomInput } from 'components/common/input/Input'
import { Button } from 'components/common/button/Button'
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
      if(typeof res === 'string'){
        setError(res)
      } else setResponse(res)
      stopFetching()
    }
  }

  return (
    <div>
      <CustomInput
        name="email"
        label="Email"
        type="text"
        onChange={handleChange}
        value={email}
      />
      <Button onClick={restorePassword}>Restore</Button>
      {isFetching && <span>Loading...</span>}
      {error || response}
    </div>
  )
}
