import type Scroll from '../blots/scroll';
import Emitter from './emitter';
declare class Composition {
    private scroll;
    private emitter;
    isComposing: boolean;
    constructor(scroll: Scroll, emitter: Emitter);
    private setupListeners;
    private handleCompositionStart;
    private handleCompositionEnd;
}
export default Composition;
