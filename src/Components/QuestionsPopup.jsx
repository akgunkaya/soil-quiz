import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Questions from './IntroQuestions/Questions';
import { useState } from 'react';
import Alert from '@mui/material/Alert';



function QuestionsPopup(props) {
    const [open, setOpen] = useState(false);
    const [correct, setCorrect] = useState('false');
    const [userSubmit, setUserSubmit] = useState(false);
    const [lastQuestion, setLastQuestion] = useState('false');
    const [questionNumber, setQuestionNumber] = useState(0);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        setUserSubmit(true)
    };

    const handleNextQuestion = () => {
        setQuestionNumber(questionNumber + 1)
        setCorrect('false')
        setUserSubmit(false)
    };

    const checkCorrect = (value) => {
        setUserSubmit(false)
        setCorrect(value)
    }

    const checkLastQuestion = (value) => {
        setLastQuestion(value)
    }

    React.useEffect(() => {
        if (lastQuestion === 'true' && userSubmit) {
            props.handleSectionChangeValue()
        }
    })


    function RenderValidationMessage() {
        if (lastQuestion === 'true' && userSubmit) {
            return <Alert severity="success">Section complete, close this dialog to move to next section</Alert>;
        } else if (correct === 'true' && userSubmit) {
            return <Alert severity="success">Correct answer</Alert>
        } else if (userSubmit) {
            return <Alert severity="error">Incorrect answer - please try again</Alert>
        }
    }

    function RenderSubmitButton() {
        if (lastQuestion === 'true' && userSubmit) {
            return <></>
        } else if (correct === 'true' && userSubmit) {
            return <Button onClick={handleNextQuestion}>Next Question</Button>
        } else if (!userSubmit) {
            return <Button onClick={handleSubmit}>Submit</Button>
        }
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Complete questions to proceed
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <Questions
                        setCorrect={checkCorrect}
                        setLastQuestion={checkLastQuestion}
                        questionNumber={questionNumber}
                        userSubmit={userSubmit}
                        correct={correct}
                    />
                    <br />
                    <br />
                    <RenderValidationMessage />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <RenderSubmitButton />
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default QuestionsPopup
