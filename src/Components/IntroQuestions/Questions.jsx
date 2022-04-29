import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Divider } from '@mui/material';


function Questions(props) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        props.setCorrect(event.target.attributes.correct.value)
        props.setLastQuestion(event.target.attributes.last.value)
    };

    React.useEffect(() => {
        if (props.correct === 'true' && props.userSubmit) {
            setValue('')
        }
    }, [props.userSubmit, props.correct])

    function QuestionsContainer(props) {

        const questions = (
            <>
                <div key={props.questionsData.id}>
                    <FormLabel id="demo-controlled-radio-buttons-group">{props.questionsData.title}</FormLabel>
                    <br />
                    <Divider />
                    <br />
                    {props.correct === 'true' && props.userSubmit ?
                        <></>
                        :
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            {props.questionsData.answers.map((answer) =>
                                <FormControlLabel key={answer.value} value={answer.value}
                                    control={

                                        <Radio inputProps={{
                                            correct: answer.correct,
                                            last: answer.last,
                                        }}
                                        />
                                    }
                                    label={answer.value} />
                            )}
                        </RadioGroup>
                    }
                </div >
            </>
        );
        return (
            <>
                {questions}
            </>
        );
    }

    const questionsData = [
        {
            id: 1, title: 'Question 1 goes heresad!',
            answers: [
                {
                    value: 'female',
                    correct: 'false',
                    last: 'false',
                },
                {
                    value: 'male',
                    correct: 'false',
                    last: 'false',
                },
                {
                    value: 'other',
                    correct: 'true',
                    last: 'false',
                },
            ]
        },
        {
            id: 2, title: 'Question 12goes heresad!',
            answers: [
                {
                    value: 'female',
                    correct: 'false',
                    last: 'false',
                },
                {
                    value: 'male',
                    correct: 'true',
                    last: 'false',
                },
                {
                    value: 'other',
                    correct: 'false',
                    last: 'false',
                },
            ]
        },
        {
            id: 3, title: 'Question 3 goes heresad!',
            answers: [
                {
                    value: 'female',
                    correct: 'true',
                    last: 'true',
                },
                {
                    value: 'male',
                    correct: 'false',
                    last: 'false',
                },
                {
                    value: 'other',
                    correct: 'false',
                    last: 'false',
                },
            ]
        },
    ];

    return (
        <FormControl>
            <QuestionsContainer correct={props.correct} userSubmit={props.userSubmit} questionsData={questionsData[props.questionNumber]} />
        </FormControl>
    );
}

export default Questions;