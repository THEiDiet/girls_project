import React, { FC, ReactElement, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { Paths } from '../enums'
import { useAppSelector } from '../hooks'
import { initialization } from '../store/thunks/appThunks'

import Spinner from './common/spinner/Spinner'
import { Header } from './header/Header'

import { Auth, Login, MainPage, NotFound, Profile, RestorePassword } from 'pages'

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
