import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { ActionButton } from "../ActionButton";
import { Cycles } from "../Cycles";
import { InputField } from "../InputField";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";

export function MainForm() {
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

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
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
    }

    function handleInterruptTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
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
                disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <Tips></Tips>
            </div>
            
            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}
                    
            <div className="formRow">
                {!state.activeTask && (
                    <ActionButton 
                        aria-label='Iniciar nova tarefa'
                        color='green' 
                        icon={<PlayCircleIcon />}
                        key='start'
                        title='Iniciar nova tarefa'
                        type='submit'
                    />
                )}
                
                {!!state.activeTask && (
                    <ActionButton 
                        aria-label='Interromper tarefa atual'
                        color='red' 
                        icon={<StopCircleIcon />}
                        key='stop'
                        onClick={handleInterruptTask}
                        title='Interromper tarefa atual'
                        type='button'
                    />
                )}
            </div>
        </form>
    )
}