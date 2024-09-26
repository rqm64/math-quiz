import { DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";

interface IQuizResultProps {
    result: string;
}

export const QuizResultStep: FC<IQuizResultProps> = ({ result }) => {
    return (
        <>
            <DialogTitle>Quiz Result</DialogTitle>
            <DialogContent>{result}</DialogContent>
        </>
    );
};
