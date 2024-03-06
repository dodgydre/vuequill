import type Quill from './quill';
declare abstract class Module<T extends {} = {}> {
    protected quill: Quill;
    protected options: Partial<T>;
    static DEFAULTS: {};
    constructor(quill: Quill, options?: Partial<T>);
}
export default Module;
