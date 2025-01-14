import React, {useMemo, useState} from 'react';
import ModeSelector from "./component/ModeSelector";
import {DefaultModes} from "./config/ModeConfig";
import TimerControl from "./component/TimerControl";
import Timer from "./component/Timer";
import Footer from "./component/Footer";
import MicrophoneContextProvider from "./component/MicrophoneContext";

const App = () => {
    const initMode = useMemo(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const mode = parseInt(searchParams.get('m'))
        return !isNaN(mode) && mode >= 0 && mode < DefaultModes.length ? mode : 0
    }, []);
    const [mode, setMode] = useState(DefaultModes[initMode]);
    const [isRunning, setIsRunning] = useState(false);
    const [timeConfig, setTimeConfig] = useState(mode.option);
    return (
        <>
            <h1 className="text-2xl font-bold text-center pb-2.5 bg-blue-950 text-white p-3 sticky top-0">TOEFL
                UTILS</h1>
            <div className="w-full grow p-4 font-sans flex flex-col gap-2">
                <div className="flex flex-col gap-2 grow">
                    <MicrophoneContextProvider>
                        <ModeSelector
                            initMode={initMode}
                            onModeChange={(newMode) => {
                            setIsRunning(false)
                            setMode(newMode)
                            setTimeConfig(newMode.option)
                        }}/>
                        <TimerControl disabled={isRunning} mode={mode} onChange={(time) => {
                            setTimeConfig(time)
                        }}/>
                        <Timer
                            smallClock={mode.smallClock}
                            onStart={() => setIsRunning(true)}
                            timeConfig={timeConfig}
                            action={mode.action}
                            permission={mode.requiredPermission}
                            comments={mode.comment}
                            onAir={() => setIsRunning(true)}
                            reset={() => setIsRunning(false)}
                        />
                        {
                            mode.contents
                        }
                    </MicrophoneContextProvider>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default App;
