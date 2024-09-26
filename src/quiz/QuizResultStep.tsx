import { DialogContent, DialogTitle, Typography } from "@mui/material";
import { FC } from "react";

interface IQuizResultProps {
    result: string;
}

export const QuizResultStep: FC<IQuizResultProps> = ({ result }) => {
    return (
        <>
            <DialogTitle>Quiz Result</DialogTitle>
            <DialogContent>
                <Typography>
                    Your grade is {result} out of 100
                </Typography>
            </DialogContent>
        </>
    );
};
