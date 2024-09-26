import { Button, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FC, useCallback } from "react";
import { IQuestion } from "../types";

interface IProps {
    data: IQuestion;
    value: string | null;
    isAvailableDone: boolean;
    isDisabledPrev: boolean;
    onChange: (value: string) => void;
    onPrevStep: () => void;
    onNextStep: () => void;
}

export const QuizQuestionStep: FC<IProps> = (props) => {
    const { data, value, isAvailableDone, isDisabledPrev, onChange, onPrevStep, onNextStep } = props;

    const handleChange = useCallback((_: unknown, value: string) => {
        onChange(value);
    }, [onChange]);

    return (
        <>
            <DialogTitle>{data.question}</DialogTitle>
            <DialogContent>
                <RadioGroup value={value} onChange={handleChange}>
                    {data.options.map((item, index) => (
                        <FormControlLabel
                            key={index}
                            value={item}
                            label={item}
                            control={<Radio />}
                        />
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

