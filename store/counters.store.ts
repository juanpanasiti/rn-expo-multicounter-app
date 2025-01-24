export interface Counter {
    id: string;
    title: string;
    count: number;
    initialValue: number;
    minValue?: number;
    maxValue?: number;
    color?: string;
}

export const counters: Counter[] = [
    {
        id: '1',
        title: 'Calentamiento',
        count: 0,
        initialValue: 0,
        minValue: 0,
        color: 'red',
    },
    {
        id: '2',
        title: 'Tronco Superior',
        count: 0,
        initialValue: 0,
        minValue: 0,
        color: 'green',

    },
    {
        id: '3',
        title: 'Tronco Inferior',
        count: 0,
        initialValue: 0,
        minValue: 0,
        color: 'blue',
    },
    {
        id: '4',
        title: 'Ejercicio Actual',
        count: 0,
        initialValue: 0,
        minValue: 0,
        color: 'yellow',
    },
];
