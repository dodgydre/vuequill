import type Quill from '../core';
import type Clipboard from '../modules/clipboard';
import type History from '../modules/history';
import type Keyboard from '../modules/keyboard';
import type { ToolbarProps } from '../modules/toolbar';
import type Uploader from '../modules/uploader';
export interface ThemeOptions {
    modules: Record<string, unknown> & {
        toolbar?: null | ToolbarProps;
    };
}
declare class Theme {
    protected quill: Quill;
    protected options: ThemeOptions;
    static DEFAULTS: ThemeOptions;
    static themes: {
        default: typeof Theme;
    };
    modules: ThemeOptions['modules'];
    constructor(quill: Quill, options: ThemeOptions);
    init(): void;
    addModule(name: 'clipboard'): Clipboard;
    addModule(name: 'keyboard'): Keyboard;
    addModule(name: 'uploader'): Uploader;
    addModule(name: 'history'): History;
    addModule(name: string): unknown;
}
export interface ThemeConstructor {
    new (quill: Quill, options: unknown): Theme;
}
export default Theme;
