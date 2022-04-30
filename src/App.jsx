import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import VideoPlayer from './Components/VideoPlayer';
import Welcome from './Components/Welcome'
import theme from './Utilities/theme'
import SoilBackground from './Assets/why-save-soil-background.webp'
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';
import VideoControlButtons from './Components/VideoControlButtons'
import ProgressBar from './Components/ProgressBar'
import QuestionsPopup from './Components/QuestionsPopup'


const AppContainer = styled('div')({
  backgroundImage: `url(${SoilBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
});

const VideoContainer = styled(Paper)({
  maxWidth: '820px',
  padding: '20px'
});

function App() {
  const [elevation, setElevation] = useState(1);
  const [startQuiz, setStartQuiz] = useState(false);

  function onHoverHandler(event) {
    event.type === 'mouseenter' ?
      setElevation(5)
      :
      setElevation(2)
  }


  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: '100vh', marginTop: '0' }}
        >

          {!startQuiz ?
            <>
              <Grid item xs={6}>
                <Welcome setStartQuiz={setStartQuiz} />
              </Grid>
            </>
            :
            <>
              <VideoContainer
                elevation={elevation}
                onMouseEnter={onHoverHandler}
                onMouseLeave={onHoverHandler}
              >
                <VideoPlayer />
                <VideoControlButtons />
                <ProgressBar />
                <QuestionsPopup />
              </VideoContainer>
            </>
          }
        </Grid>

      </ThemeProvider>
    </AppContainer>
  );
}

export default App;