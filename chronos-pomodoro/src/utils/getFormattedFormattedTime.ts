export function getFormattedTime(seconds: number): string {
    const minutesAsString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsAsString = String(Math.floor(seconds % 60)).padStart(2, '0');

    return `${minutesAsString}:${secondsAsString}`;
}