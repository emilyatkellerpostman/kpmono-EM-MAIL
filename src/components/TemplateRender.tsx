import { render } from "@react-email/render";
import { TemplateSet } from "./TemplateSet";
import { type ComponentProps } from 'react';

const TemplateRender = {
    default: { Element: TemplateSet }
}

export type TemplateRenderType = {
    default: ComponentProps<typeof TemplateSet>;
}

export function renderTemplate<T extends keyof TemplateRenderType>(template: T, props: TemplateRenderType[T]): { html: string;} {
    const {Element} = TemplateRender[template];
    return { html: render(<Element />) };
}