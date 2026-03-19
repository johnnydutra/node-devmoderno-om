import { PlayCircleIcon } from "lucide-react";
import { ActionButton } from "../ActionButton";
import { Cycles } from "../Cycles";
import { InputField } from "../InputField";
import type { HomePageProps } from "../../pages/HomePage";

export function MainForm({ appState }: HomePageProps) {
    return (
        <form action="" className="form">
            <div className="formRow">
                <InputField id='input' type='text' label='Tarefa' placeholder='Digite algo aqui'/>
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de {appState.config.workTime}min</p>
            </div>
            
            <div className="formRow">
                <Cycles />
            </div>
                    
            <div className="formRow">
                <ActionButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}