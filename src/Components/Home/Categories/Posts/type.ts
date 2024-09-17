export interface PostProps{
    id:string,
    postTitle:string,
    createdDate:string,
    description:string,
    firstName:string,
    userId:string,
    files:string,
    url:string,
    urlType:string

}

export interface PostLikeProps{
    id:string,
    UserLoginStatus:boolean,
    username:string,
    lastName:string,
    Mobile:string,
    UserId:string,
    Email:string
}