/* eslint-disable implicit-arrow-linebreak */
export const parseCardNumber = (cardNumber: string): string =>
    cardNumber
        .split('')
        .reduce((acc: string[], item: string, index: number) => {
            if (index % 4 === 0) {
                const partIndex = index / 4;
                const part = cardNumber.slice(index, index + 4);

                if (partIndex === 1 || partIndex === 2) {
                    const hiddenPart = new Array(4).fill('•').join('');

                    acc.push(hiddenPart);
                } else {
                    acc.push(part);
                }
            }

            return acc;
        }, [])
        .join(' ');
