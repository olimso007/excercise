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
