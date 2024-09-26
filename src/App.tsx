import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { Quiz } from "./quiz/Quiz";
import { DATA } from "./DATA";

export const App = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

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

            <Button variant="contained" onClick={() => setIsOpenModal(true)}>Start</Button>

            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                fullWidth
            >
                <Quiz data={DATA} />
            </Dialog>
        </Box>
    );
}
