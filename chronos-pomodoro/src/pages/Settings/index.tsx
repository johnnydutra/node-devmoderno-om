import { SaveIcon } from "lucide-react";
import { ActionButton } from "../../components/ActionButton";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { InputField } from "../../components/InputField";
import { MainTemplate } from "../../templates/MainTemplate";
import { useRef } from "react";
import { showMessage } from "../../adapters/showMessage";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
    const { dispatch } = useTaskContext();
    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakInput = useRef<HTMLInputElement>(null);
    const longBreakInput = useRef<HTMLInputElement>(null);

    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formErrors: string[] = [];

        const workTime = Number(workTimeInput.current?.value);
        const shortBreak = Number(shortBreakInput.current?.value);
        const longBreak = Number(longBreakInput.current?.value);

        if (isNaN(workTime) || isNaN(shortBreak) || isNaN(longBreak)) {
            formErrors.push('Todos os campos devem ser números válidos.');
            return;
        }

        if (workTime <= 0 || workTime > 30) {
            formErrors.push('Tempo de foco deve ser um número entre 1 e 30.');
            return;
        }

        if (shortBreak <= 0 || shortBreak > 30) {
            formErrors.push('Tempo de descanso curto deve ser um número entre 1 e 30.');
            return;
        }

        if (longBreak <= 0 || longBreak > 60) {
            formErrors.push('Tempo de descanso longo deve ser um número entre 1 e 60.');
            return;
        }

        if (formErrors.length > 0) {
            formErrors.forEach(error => {
                showMessage.error(error)
            });
            return
        }

        dispatch({ type: TaskActionsTypes.CHANGE_SETTINGS, payload: { workTime, shortBreak, longBreak } });
        showMessage.success('Configurações salvas com sucesso!');
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para tempo de foco e descansos.
                </p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action='' className="form">
                    <div className="formRow">
                        <InputField
                            type='number'
                            id='workTime'
                            label='Foco'
                            ref={workTimeInput}
                        />
                    </div>
                    <div className="formRow">
                        <InputField
                            type='number'
                            id='shortBreak'
                            label='Descanso Curto'
                            ref={shortBreakInput}
                        />
                    </div>
                    <div className="formRow">
                        <InputField
                            type='number'
                            id='longBreak'
                            label='Descanso Longo'
                            ref={longBreakInput}
                        />
                    </div>   
                    <div className="formRow">
                        <ActionButton 
                            icon={<SaveIcon />}
                            aria-label='Salvar configurações'
                            title='Salvar configurações'
                        />
                    </div>                                       
                </form>
            </Container>
        </MainTemplate>
    );
}