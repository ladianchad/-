import {Mode} from "../global/types";
import speech from "../utils/speech";
import sleep from "../utils/sleep";
import buzzer from "../utils/buzzer";

export const DefaultModes: Mode[] = [
    {
        name: "말하기 유형 1 (준비 15 초, 말하기 45 초)",
        option: {
            prepareTime: 15,
            runTime: 45
        },
        action: {
            async beforeMiddle() {
                speech("Speaking after beep...");
                await sleep(2000);
                await buzzer(1000)
            },
            async end() {
                speech("Time is over.");
                await sleep(2000);
            }
        },
        comment: {
            beforeStart: "Speaking 문제를 준비하세요.",
            beforeMiddle: "Speaking 준비 시간.",
            end: "수고하셨습니다."
        }
    }, {
        name: "말하기 유형 2 (준비 30 초, 말하기 60 초)",
        option: {
            prepareTime: 30,
            runTime: 60
        },
        action: {
            async beforeMiddle() {
                speech("Speaking after beep...");
                await sleep(2000);
                await buzzer(1000)
            },
            async end() {
                speech("Time is over.");
                await sleep(2000);
            }
        },
        comment: {
            beforeStart: "Speaking 문제를 준비하세요.",
            beforeMiddle: "Speaking 준비 시간.",
            end: "수고하셨습니다."
        }
    }, {
        name: "쓰기 유형 1 (쓰기 20 분)",
        option: {
            prepareTime: 0,
            runTime: 600
        },
        action: {
            async end() {
                speech("Time is over.");
                await sleep(2000);
            }
        }
    }, {
        name: "쓰기 유형 2 (쓰기 10 분)",
        option: {
            prepareTime: 0,
            runTime: 1200
        },
        action: {
            async end() {
                speech("Time is over.");
                await sleep(2000);
            }
        }
    }, {
        name: "읽기 (36 분)",
        option: {
            prepareTime: 0,
            runTime: 2160
        },
        action: {
            async end() {
                speech("Time is over.");
                await sleep(2000);
            }
        }
    }
]
