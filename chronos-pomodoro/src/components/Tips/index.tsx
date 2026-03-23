import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
    const { state } = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime} minutos</span>,
        shortBreak: <span>Descanso curto de {state.config.shortBreak} minutos</span>,
        longBreak: <span>Descanso longo de {state.config.longBreak} minutos</span>
    }

    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de {state.config.workTime} minutos</span>,
        shortBreak: <span>Próximo descanso é de {state.config.shortBreak} minutos</span>,
        longBreak: <span>Próximo descanso será longo</span>
    }

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}