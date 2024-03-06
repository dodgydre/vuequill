import Block from '../blots/block';
declare class Header extends Block {
    static blotName: string;
    static tagName: string[];
    static formats(domNode: Element): number;
}
export default Header;
