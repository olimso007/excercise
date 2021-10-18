export interface Pagination {
  total:number,
  pages:number,
  page:number,
  limit:number,
  links:{
    previous:string,
    current:string,
    next:string
  }
}

export interface Post {
  id: number,
  user_id: number,
  title: string,
  body: string
}

export interface Posts {
  meta: {
    pagination: Pagination
  },
  data: Post[]
}

export interface UserInfo {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string
}

export interface User {
  meta: null,
  data: UserInfo
}

export interface Users {
  meta: {
    pagination: Pagination
  },
  data: UserInfo[]
}
