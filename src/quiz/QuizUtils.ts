import { IQuestion } from "../DATA";

export const calculateQuizGrade = (answers: Array<string | null>, questions: IQuestion[]) => {
    let correctAnswers = 0;
    answers.forEach((item, index) => {
        if (item && item === questions[index].answer) {
            correctAnswers++;
        }
        
    });

    const grade = (correctAnswers / questions.length) * 100;
  
    return Math.round(grade).toString();
};
