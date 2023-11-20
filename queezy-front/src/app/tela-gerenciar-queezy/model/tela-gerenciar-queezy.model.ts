export class QueezyQuestion {
    constructor(
        public id_user: number,
        public question: string,
        public name: string,
        public answers: QueezyAnswer[],
    ){}
}

export class QueezyAnswer {
    constructor(
        public answer: string,
        public answers_correct: boolean
    ){}
}

export class QuestionResponse {
    constructor(
        public question: QueezyQuestion,
        public mensagem: any,
        public data: any
    ){}
}