import { PlayCircleIcon } from "lucide-react";
import { ActionButton } from "../ActionButton";
import { Cycles } from "../Cycles";
import { InputField } from "../InputField";
import { useRef } from "react";

export function MainForm() {
    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleCreateTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleCreateTask} action="" className="form">
            <div className="formRow">
                <InputField 
                id='input' 
                type='text' 
                label='Tarefa' 
                placeholder='Digite o nome da tarefa'
                ref={taskNameInput}
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de 25min</p>
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