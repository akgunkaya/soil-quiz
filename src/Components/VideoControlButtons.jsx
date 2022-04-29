import * as React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Replay5Icon from '@mui/icons-material/Replay5';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material';

const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
});


function VideoControlButtons(props) {

    return (
        <ButtonsContainer >
            <Tooltip title="Play">
                <IconButton onClick={props.playButtonOnClickHandler}>
                    <PlayCircleIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Pause">
                <IconButton onClick={props.pauseButtonOnClickHandler}>
                    <PauseCircleIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Rewind">
                <IconButton onClick={props.rewindButtonOnClickHandler}>
                    <Replay5Icon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Restart this section">
                <IconButton onClick={props.rewindToSectionButtonOnClickHandler}>
                    <FirstPageIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Skip this section">
                <IconButton onClick={props.skipToSectionButtonOnClickHandler}>
                    <LastPageIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Tooltip>
        </ButtonsContainer>
    );
}

export default VideoControlButtons;