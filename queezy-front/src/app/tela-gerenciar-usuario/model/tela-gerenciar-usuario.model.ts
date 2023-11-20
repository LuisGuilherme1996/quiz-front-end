export class User {
    constructor(
        public id_user: number,
        public name: string,
        public email: string,
        public password: string,
    ){}
}

export interface UserResponse {
    user: User,
    mensagem: any
}