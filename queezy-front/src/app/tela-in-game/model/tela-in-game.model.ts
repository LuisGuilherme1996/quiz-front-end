export class QuestionByUser{
    constructor(
        public id_question: number,
        public question: string,
        public question_user_id: number,
        public imagem: string,
        public id_answer: number,
        public answer: string,
        public answer_correct: boolean,
        public question_id: number,
        public user_id: number,

    ){}
}

export interface TelaInGameResponse {
    userQuestion: QuestionByUser
    isCorrect: QuestionByUser
}