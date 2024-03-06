import type Quill from '../core/quill';
import Theme from '../core/theme';
import type { ThemeOptions } from '../core/theme';
import Picker from '../ui/picker';
import Tooltip from '../ui/tooltip';
import type { Range } from '../core/selection';
import type Clipboard from '../modules/clipboard';
import type History from '../modules/history';
import type Keyboard from '../modules/keyboard';
import type Uploader from '../modules/uploader';
import type Selection from '../core/selection';
declare class BaseTheme extends Theme {
    pickers: Picker[];
    tooltip?: Tooltip;
    constructor(quill: Quill, options: ThemeOptions);
    addModule(name: 'clipboard'): Clipboard;
    addModule(name: 'keyboard'): Keyboard;
    addModule(name: 'uploader'): Uploader;
    addModule(name: 'history'): History;
    addModule(name: 'selection'): Selection;
    addModule(name: string): unknown;
    buildButtons(buttons: NodeListOf<HTMLElement>, icons: Record<string, Record<string, string> | string>): void;
    buildPickers(selects: NodeListOf<HTMLSelectElement>, icons: Record<string, string | Record<string, string>>): void;
}
declare class BaseTooltip extends Tooltip {
    textbox: HTMLInputElement | null;
    linkRange?: Range;
    constructor(quill: Quill, boundsContainer?: HTMLElement);
    listen(): void;
    cancel(): void;
    edit(mode?: string, preview?: string | null): void;
    restoreFocus(): void;
    save(): void;
}
export { BaseTooltip, BaseTheme as default };
