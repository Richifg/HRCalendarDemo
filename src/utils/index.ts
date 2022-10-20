// eventually add time formatting if needed

export function getAPIFormatedDate(date: Date) {
    const year = date.getUTCFullYear();
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const month = monthIndex + 1 > 11 ? 0 : monthIndex + 1;
    return `${year}-${month}-${day}`;
}