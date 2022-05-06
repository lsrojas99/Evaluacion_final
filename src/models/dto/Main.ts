export interface BaseMain {
    id?: number
    name: string
    type: string
    birth: Date
    photo: string | null
  }
  
  export interface Main extends BaseMain {
    id: number
    userId: number | null
  }
  
  export interface CreateMain extends BaseMain {
    
  }
  
  export type UpdateMain = Partial<BaseMain>