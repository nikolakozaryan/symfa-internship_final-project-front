import { useEffect, useState } from 'react';

export const useDebounce = (value:string, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setInterval(() => setDebouncedValue(value), delay);

        return () => clearInterval(id);
    }, [value, delay]);

    return debouncedValue;
};
