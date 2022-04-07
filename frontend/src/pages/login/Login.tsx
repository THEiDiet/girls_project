import React, { FC } from 'react'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { Button } from '../../components/common'
import { useAppSelector } from '../../hooks/useAppDispatchAndSelector'
import { loginT } from '../../store/thunks/userThunks/userThunks'

export const Login: FC = () => {
  const dispatch = useDispatch()
  const login = useAppSelector(state => state.test.login)
  const formik = useFormik({
    initialValues: {
      name: login,
      password: '',
      rememberMe: true,
    },
    onSubmit: values => {
      // dispatch(loginT(values))
      console.log(JSON.stringify(values))
    },
  })

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    dispatch(loginT({ email: 'Alex@mail.ru', password: '12345678', rememberMe: true }))
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Login"
          />
        </div>
        <div>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="checked"
            // value={formik.values.rememberMe}
            onChange={formik.handleChange}
            placeholder="Remember me"
          />
        </div>
        <div>
          <Button>Log in</Button>
        </div>
      </form>

      <button type="button" onClick={handleClick}>
        Get test string
      </button>
      {login && <span>{login}</span>}
    </div>
  )
}
