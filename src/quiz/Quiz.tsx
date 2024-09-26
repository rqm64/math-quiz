import { FC, useCallback, useState } from "react";
import { IQuestion, TAnswer } from "../types";
import { QuizResultStep } from "./QuizResultStep";
import { QuizQuestionStep } from "./QuizQuestionStep";
import { calculateQuizGrade } from "./QuizUtils";

interface IQuizProps {
    data: IQuestion[];
}

export const Quiz: FC<IQuizProps> = ({ data }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<TAnswer[]>(new Array(data.length).fill(null));
    const isFinished = step === data.length;

    const handleNextStep = useCallback(() => {
        setStep(n => n + 1);
    }, []);

    const handlePrevStep = useCallback(() => {
        setStep(n => n - 1);
    }, []);

    const handleChangeAnswer = (value: string) => {
        const nextAnswers = [...answers];
        nextAnswers[step] = value;
        setAnswers(nextAnswers);
    };

    return isFinished ? (
        <QuizResultStep result={calculateQuizGrade(answers, data)} />
    ) : (
        <QuizQuestionStep
            data={data[step]}
            value={answers[step]}
            onChange={handleChangeAnswer}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isDisabledPrev={step === 0}
            isAvailableDone={step === data.length - 1}
        />
    );
};
