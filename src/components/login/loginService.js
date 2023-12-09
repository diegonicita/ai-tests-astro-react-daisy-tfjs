export const loginService = async (data) => {
  try {
    // Enviar la solicitud POST
    const resp = await fetch(import.meta.env.PUBLIC_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
      
    })
    const responseData = await resp.json()
    return responseData
  } catch (error) {
    return {
      error: true,
      errors: null,
      message: 'Error al enviar la solicitud',
      token: null,
      userResponse: {},
    }
  }
}
