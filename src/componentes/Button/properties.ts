import cx from "classnames";

export interface ButtonProperties {
    variant: 'primary' | 'secondary'
}

export const buttonProperties = ({variant }: Omit<ButtonProperties, 'title'>) => cx({
    'bg-slate-700 text-white': variant === "primary",
    'bg-slate-50': variant === "secondary"
})
