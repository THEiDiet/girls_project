import React, { FC, ReactElement, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { Header } from './header/Header'
import Spinner from './spinner/Spinner'

import { Paths } from 'enums'
import { useAppSelector } from 'hooks'
import { Auth, Login, MainPage, NotFound, Profile, RestorePassword } from 'pages'
import { initialization } from 'store/thunks/appThunks'

export const Router: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const isAuthorized = useAppSelector(state => state.app.isAuthorized)
  const isInitialized = useAppSelector(state => state.app.isInitialized)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(initialization())
  }, [])

  useEffect(() => {
    if (isInitialized && !isAuthorized) {
      navigate(Paths.Login)
    }
    if (isInitialized && isAuthorized) {
      navigate(Paths.Profile)
    }
  }, [isAuthorized])

  if (!isInitialized) {
    return <Spinner />
  }

  return (
    <Routes>
      <Route path={Paths.Home} element={<Header />}>
        <Route index element={<MainPage />} />
        <Route
          path={Paths.Auth}
          element={isAuthorized ? <Navigate to={Paths.Home} /> : <Auth />}
        />
        <Route
          path={Paths.Login}
          element={isAuthorized ? <Navigate to={Paths.Home} /> : <Login />}
        />
        <Route path={Paths.RestorePassword} element={<RestorePassword />} />
        <Route path={Paths.Profile} element={<Profile />} />
        <Route path={Paths.NotFound} element={<NotFound />} />
      </Route>
    </Routes>
  )
}
