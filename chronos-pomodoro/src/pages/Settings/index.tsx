import { SaveIcon } from "lucide-react";
import { ActionButton } from "../../components/ActionButton";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { InputField } from "../../components/InputField";
import { MainTemplate } from "../../templates/MainTemplate";


export function Settings() {
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
                <form action='' className="form">
                    <div className="formRow">
                        <InputField id='workTime' label='Foco' />
                    </div>
                    <div className="formRow">
                        <InputField id='shortBreak' label='Descanso Curto' />
                    </div>
                    <div className="formRow">
                        <InputField id='longBreak' label='Descanso Longo' />
                    </div>   
                    <div className="formRow">
                        <ActionButton icon={<SaveIcon />}/>
                    </div>                                       
                </form>
            </Container>
        </MainTemplate>
    );
}