import gravitationalBeep from '../assets/sounds/gravitational-beep.mp3';

export function loadBeep() {
    const audio = new Audio(gravitationalBeep);
    audio.load();

    return () => {
        audio.currentTime = 0;
        audio.play().catch(error => console.log('Erro ao reproduzir áudio', error));
    };
}