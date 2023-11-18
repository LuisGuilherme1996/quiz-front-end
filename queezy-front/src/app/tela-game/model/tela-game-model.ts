export class Games {
    constructor(
        public id_game: number,
        public name: string,
        public url: string,
        public user_id: number,
        public restarOnError: boolean,
        public games: any
    ){}
}