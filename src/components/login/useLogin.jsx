import { useState } from 'react'
import { loginService } from './loginService'

export const useLogin = () => {
  const [loginResponse, setLoginResponse] = useState(null)

  const handleSubmitLogin = async (data) => {
    const resp = await loginService(data)
    setLoginResponse(resp)
  }

  return { handleSubmitLogin, loginResponse }
}
