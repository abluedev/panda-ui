import {ButtonProperties} from "./componentes/Button/properties.ts";
import {AnchorProperties} from "./componentes/Anchor/properties.ts";
import {JSX} from "react";

export interface ComponentMap {
    ButtonComponent: ButtonProperties;
    AnchorComponent: AnchorProperties;
}

export const properties: { [K in keyof ComponentMap]: ComponentMap[K] } = {
    ButtonComponent: { variant: 'primary' },
    AnchorComponent: { icon: 'potatoe' }
}

export type PandaComponent = {
    title: keyof ComponentMap; // Aseguramos que `title` sea una clave válida de `ComponentMap`
    component: (props: ButtonProperties | AnchorProperties) => JSX.Element; // Define el tipo base del componente
};
