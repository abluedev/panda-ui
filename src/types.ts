import {ButtonProperties} from "./componentes/Button/properties.ts";
import {AnchorProperties} from "./componentes/Anchor/properties.ts";
import {JSX} from "react";
import {ButtonsComponent} from "./componentes/Button/toTests.tsx";

export interface ComponentMap {
    ButtonComponent: ButtonProperties[];
    AnchorComponent: AnchorProperties[];
}

export const TestComponents: { [K in keyof ComponentMap]: ComponentMap[K] } = {
    ButtonComponent: ButtonsComponent,
    AnchorComponent: [{ icon: 'potatoe' }]
}

export type PandaComponent = {
    title: keyof ComponentMap; // Aseguramos que `title` sea una clave válida de `ComponentMap`
    component: (props: ButtonProperties | AnchorProperties) => JSX.Element; // Define el tipo base del componente
};
