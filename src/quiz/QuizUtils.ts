import { IQuestion, TAnswer } from "../types";

export const calculateQuizGrade = (answers: TAnswer[], questions: IQuestion[]) => {
    const correctAnswers = answers.reduce((acc, answer, index) => (
        answer === questions[index].answer ? acc + 1 : acc
    ), 0);

    const grade = (correctAnswers / questions.length) * 100;

    return Math.round(grade).toString();
};
