import { Button, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FC } from "react";
import { IQuestion } from "../DATA";

interface IProps {
    data: IQuestion;
    value: string | null;
    isAvailableDone: boolean;
    isDisabledPrev: boolean;
    onChange: (value: string) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
}

export const QuizQuestionStep: FC<IProps> = ({ data, value, onChange, onPrevStep, onNextStep, isDisabledPrev, isAvailableDone }) => {
    const handleChange = (_: unknown, value: string) => {
        onChange(value);
    };

    return (
        <>
            <DialogTitle>{data.question}</DialogTitle>
            <DialogContent>
                <RadioGroup value={value} onChange={handleChange}>
                    {data.options.map((item, index) => (
                        <FormControlLabel key={index} value={item} label={item} control={<Radio />}/>
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={onPrevStep} disabled={isDisabledPrev}>Prev</Button>
                <Button onClick={onNextStep} variant="contained">
                    {isAvailableDone ? 'Done' : 'Next'}
                </Button>
            </DialogActions>
        </>
    );
}

