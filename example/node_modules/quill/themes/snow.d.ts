import BaseTheme from './base';
import type Quill from '../core';
import type Toolbar from '../modules/toolbar';
import type { ThemeOptions } from '../core/theme';
declare class SnowTheme extends BaseTheme {
    constructor(quill: Quill, options: ThemeOptions);
    extendToolbar(toolbar: Toolbar): void;
}
export default SnowTheme;
