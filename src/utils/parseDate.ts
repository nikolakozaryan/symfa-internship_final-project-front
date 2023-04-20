export const parseDate = (stringDate: string): string => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'Jule',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const date = new Date(stringDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${day} ${months[month]} ${year}`;
};
