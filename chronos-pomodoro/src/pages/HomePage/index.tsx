import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function HomePage() {
    return (
        <MainTemplate>
            <Container>
                <Countdown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}