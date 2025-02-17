import {useMemo} from "react";
import {DefaultModes} from "../config/ModeConfig";
import {Mode} from "../global/types";

export interface ModeSelectorProps {
    onModeChange?: (mode: Mode) => void
    initMode: number
}

const ModeSelector = ({
                          initMode,
                          onModeChange
                      }: ModeSelectorProps) => {
    const modes = useMemo(() => {
        return DefaultModes.map((item, index) => {
            return (
                <option className="focus:outline-none focus:bg-white focus:border-none bg-white w-full h-full"
                        value={index}
                        key={index}>{item.name}</option>
            )
        })
    }, []);


    return (
        <div className="w-full flex flex-col justify-center items-center gap-2">
            <label className="px-2 py-1 rounded border-2 w-full focus-within:border-2 focus-within:border-blue-600">
                <select
                    id="modeSelection"
                    defaultValue={initMode}
                    className="focus:outline-none focus:border-none w-full h-full text-center appearance-none bg-transparent"
                    onChange={(item) => {
                        if (onModeChange) {
                            const mode = DefaultModes[item.currentTarget.value];
                            window.history.pushState({}, "", `/toefl_timer/?m=${item.currentTarget.value}`)
                            onModeChange(mode)
                        }
                    }}>
                    {modes}
                </select>
            </label>
        </div>
    )
}

export default ModeSelector
