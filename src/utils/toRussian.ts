export function toRussian(word: string): string {
    const replacements: { [key: string]: string } = {
        "mt": "МТ",
        "kn": "КН",
        "kb": "КБ"
    };

    const regex = new RegExp(Object.keys(replacements).join('|'), 'gi');

    return word.replace(regex, (match) => replacements[match.toLowerCase()] || match);
}