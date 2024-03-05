import { PropType } from "vue";
import Quill from "quill";
import Delta from "quill-delta";
import { Sources, Module, Options, ContentPropType } from "./types";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    content: {
        type: PropType<ContentPropType>;
        default: null;
    };
    contentType: {
        type: PropType<"delta" | "html" | "text">;
        default: string;
        validator: (value: string) => boolean;
    };
    enable: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    theme: {
        type: PropType<"" | "snow" | "bubble">;
        default: string;
        validator: (value: string) => boolean;
    };
    toolbar: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        validator: (value: unknown) => boolean;
    };
    modules: {
        type: PropType<Module | Module[]>;
        required: false;
    };
    options: {
        type: PropType<Options>;
        required: false;
    };
    globalOptions: {
        type: PropType<Options>;
        required: false;
    };
}, {
    editor: import("vue").Ref<HTMLElement | undefined>;
    getEditor: () => HTMLElement;
    getToolbar: () => HTMLElement;
    getQuill: () => Quill;
    getContents: (index?: number | undefined, length?: number | undefined) => string | Delta | undefined;
    setContents: (content: ContentPropType, source?: Sources) => void;
    getHTML: () => string;
    setHTML: (html: string) => void;
    pasteHTML: (html: string, source?: Sources) => void;
    focus: () => void;
    getText: (index?: number | undefined, length?: number | undefined) => string;
    setText: (text: string, source?: Sources) => void;
    reinit: () => void;
    insertText: (index: number, text: string, format?: string, value?: any, source?: Sources) => void;
    insertEmbed: (index: number, type: string, value: any, source?: Sources) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    textChange: (...args: any[]) => void;
    selectionChange: (...args: any[]) => void;
    editorChange: (...args: any[]) => void;
    "update:content": (...args: any[]) => void;
    blur: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    ready: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: PropType<ContentPropType>;
        default: null;
    };
    contentType: {
        type: PropType<"delta" | "html" | "text">;
        default: string;
        validator: (value: string) => boolean;
    };
    enable: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    theme: {
        type: PropType<"" | "snow" | "bubble">;
        default: string;
        validator: (value: string) => boolean;
    };
    toolbar: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        validator: (value: unknown) => boolean;
    };
    modules: {
        type: PropType<Module | Module[]>;
        required: false;
    };
    options: {
        type: PropType<Options>;
        required: false;
    };
    globalOptions: {
        type: PropType<Options>;
        required: false;
    };
}>> & {
    onTextChange?: ((...args: any[]) => any) | undefined;
    onSelectionChange?: ((...args: any[]) => any) | undefined;
    onEditorChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:content"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
}, {
    content: ContentPropType;
    contentType: "delta" | "html" | "text";
    enable: boolean;
    readOnly: boolean;
    theme: "" | "snow" | "bubble";
}, {}>, {
    toolbar?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
