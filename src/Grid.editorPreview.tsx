import { ReactElement, createElement } from "react";
import { GridSample } from "./components/GridSample";

export function preview(): ReactElement {
    return <GridSample />;
}

export function getPreviewCss(): string {
    return require("./ui/Grid.css");
}
