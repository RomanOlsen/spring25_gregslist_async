// NOTE all of these variables are used mainly for authentication purposes, you shouldn't need to change them

export const dev = window.location.origin.includes('localhost')
// NOTE api instance of axios uses this exported variable as its baseUrl
export const baseURL = 'https://sandbox.codeworksacademy.com/api'
export const domain = 'codeworksclassroom.auth0.com'
export const audience = 'https://codeworksclassroom.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
