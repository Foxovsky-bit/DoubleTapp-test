export function toStringAge(age: number): string {
    const lastDigit = age % 10;

    if (age === 1) {
        return "1 год";
    } else if (age >= 2 && age <= 4) {
        return `${age} года`;
    } else if (age >= 5 && age <= 20) {
        return `${age} лет`;
    } else {
        if (lastDigit === 1) {
            return `${age} год`;
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return `${age} года`;
        } else {
            return `${age} лет`;
        }
    }
}