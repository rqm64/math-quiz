import { Box, Button, Dialog, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { Quiz } from "./quiz/Quiz";
import { QUIZ_QUESTIONS } from "./constants/quizQuestions";

export const App = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(true)
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsOpenModal(false)
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            gap="2"
        >
            <Typography variant="h2">
                Math Quiz
            </Typography>

            <Button variant="contained" onClick={handleOpenModal}>Start</Button>

            <Dialog
                open={isOpenModal}
                onClose={handleCloseModal}
                fullWidth
            >
                <Quiz data={QUIZ_QUESTIONS} />
            </Dialog>
        </Box>
    );
}
