import useAddLibrary from '../Utilities/useAddLibrary';
import { useEffect, useState } from 'react';
import VideoControlButtons from './VideoControlButtons';
import { styled } from '@mui/material';
import ProgressBar from './ProgressBar'
import QuestionsPopup from './QuestionsPopup';



let player,
    stopPlayTimer;


const VideoPlayerContainer = styled('div')({
    pointerEvents: 'auto',
});

function VideoPlayer(props) {
    const [scriptLoaded] = useAddLibrary('https://www.youtube.com/iframe_api', 'YT')
    const [currentSection, setCurrentSection] = useState(0);
    const [currentSectionStopValue, setCurrentSectionStopValue] = useState(0);
    const [currentSectionStartValue, setCurrentSectionStartValue] = useState(0);




    function loadVideo() {
        window.YT.ready(function () {
            new window.YT.Player("player", {
                height: "500",
                width: "820",
                videoId: "443_RRUmzdg",
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
                playerVars: {
                    controls: 1,
                    playsinline: 1,
                    start: currentSectionStartValue,
                },
            });
        });
    };

    function onPlayerReady(event) {
        player = event.target;
    }

    function onPlayButtonClick() {
        player.playVideo();
    }

    function onPauseButtonClick() {
        player.pauseVideo();
    }

    function onRewindButtonClick() {
        player.seekTo(player.getCurrentTime() - 5, true);
        player.playVideo();
    }

    function onRewindToSectionClick() {
        player.seekTo(currentSectionStartValue, true);
        player.playVideo();
    }

    function onSkipToSectionClick() {
        player.seekTo(currentSectionStopValue, true);
        sectionEnd(currentSection)
    }

    function stopPlayAt(event) {
        let time, rate, remainingTime;
        clearTimeout(stopPlayTimer);
        if (event.data === window.YT.PlayerState.PLAYING) {
            time = player.getCurrentTime();
            if (time + 0.4 < currentSectionStopValue) {
                rate = player.getPlaybackRate();
                remainingTime = (currentSectionStopValue - time) / rate;
                stopPlayTimer = setTimeout(function () {
                    sectionEnd(currentSection);
                }, remainingTime * 1000);
            }
        }
    }

    function sectionEnd() {
        console.log('section ended')
        onPauseButtonClick();
    }

    function onPlayerStateChange(event) {
        var videoStatuses = Object.entries(window.YT.PlayerState);
        console.log(videoStatuses.find((status) => status[1] === event.data)[0])
        stopPlayAt(event);
        if (event.data === window.YT.PlayerState.PLAYING) {
            console.log(event.target.playerInfo.currentTime)
        }
    }

    function handleSectionChangeValue() {
        setCurrentSection(currentSection + 1)
    }


    useEffect(() => {
        if (scriptLoaded) {
            loadVideo();
        }
        console.log(currentSection)
        if (currentSection) {
            if (currentSection === 0) {
                setCurrentSectionStartValue(0)
                setCurrentSectionStopValue(6)
            } else if (currentSection === 1) {
                setCurrentSectionStartValue(6)
                setCurrentSectionStopValue(40)
            }

        }
    }, [scriptLoaded, props, currentSection, loadVideo])


    return (
        <>
            <div>
                <VideoPlayerContainer>
                    <div id="player" />
                </VideoPlayerContainer>
                <VideoControlButtons
                    playButtonOnClickHandler={onPlayButtonClick}
                    pauseButtonOnClickHandler={onPauseButtonClick}
                    rewindButtonOnClickHandler={onRewindButtonClick}
                    rewindToSectionButtonOnClickHandler={onRewindToSectionClick}
                    skipToSectionButtonOnClickHandler={onSkipToSectionClick}
                />
                <ProgressBar currentSectionStartValue={currentSectionStartValue} />
                <QuestionsPopup currentSection={currentSection} handleSectionChangeValue={handleSectionChangeValue} />
            </div>
        </>

    );
}

export default VideoPlayer;