import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { ActionButton } from "../../components/ActionButton";

import styles from './styles.module.css';
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function History() {
    const { state } = useTaskContext();

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>Histórico</span>
                    <span className={styles.buttonContainer}>
                        <ActionButton 
                            icon={<TrashIcon />} 
                            color='red'
                            title='Apagar histórico'
                            aria-label='Apagar histórico'
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.tasks.map(task => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} min</td>
                                        <td>{new Date(task.startDate).toISOString()}</td>
                                        <td>{task.interruptDate}</td>
                                        <td>{task.type}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}