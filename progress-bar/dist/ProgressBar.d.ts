interface ProgressBarProps {
    domSelector: string;
    height?: number;
    color?: string;
    top?: number;
    left?: number;
    onBottom?: () => void;
}
export default function ProgressBar({ domSelector, height, color, top, left, onBottom, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
export {};
