export interface BaseUsuario {
    id?: number
    email: string
  }
  
  export interface Usuario extends BaseUsuario{
    id: number
  }
  
  export interface CreateUsuario extends BaseUsuario {
    password: string
  }
  
  export type UpdateUsuario = Partial<CreateUsuario>
  
  export interface LoginUsuario extends Usuario {
    password: string
  }
  
  export interface UserTokenPayload {
    id: number
    email: string
    exp: number
    iat: number
  }
  