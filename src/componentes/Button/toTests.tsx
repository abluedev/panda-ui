import {ButtonProperties} from "./properties.ts";

export const ButtonsComponent: Omit<ButtonProperties[], 'title'> = [
    { variant: 'primary' },
    { variant: 'secondary' },
]
