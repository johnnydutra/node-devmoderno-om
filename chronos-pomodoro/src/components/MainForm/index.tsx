import { PlayCircleIcon } from "lucide-react";
import { ActionButton } from "../ActionButton";
import { Cycles } from "../Cycles";
import { InputField } from "../InputField";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
    const { setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (!taskNameInput.current) return;
        
        const taskName = taskNameInput.current.value.trim();
        
        if (taskName === '') {
            alert('Digite o nome da tarefa');
            return;
        }
        
        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: 1,
            type: 'workTime'
        }
        
        const secondsRemaining = newTask.duration * 60;
        
        setState(currentState => {
            return {
                ...currentState,
                config: { ...currentState.config },
                activeTask: newTask,
                currentCycle: 1,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
                tasks: [...currentState.tasks, newTask]
            }
        }) 
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