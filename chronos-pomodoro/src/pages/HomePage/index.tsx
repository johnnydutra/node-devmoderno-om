import type { SetStateAction } from "react";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

export type HomePageProps = {
    appState: TaskStateModel,
    setAppState: React.Dispatch<SetStateAction<TaskStateModel>>;
}

export function HomePage(props: HomePageProps) {
    return (
        <MainTemplate>
            <Container>
                <Countdown {...props}/>
            </Container>

            <Container>
                <MainForm {...props}/>
            </Container>
        </MainTemplate>
    );
}