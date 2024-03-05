import Quill from "quill";
import Delta from "quill-delta"
import * as Parchment from "parchment"

/** Added these because I can't figure out how to bring in the types from Quill */

type Sources = "api" | "user" | "silent";
type TextChangeHandler = (
  delta: Delta,
  oldContents: Delta,
  source: Sources
) => any;
type SelectionChangeHandler = (
  range: RangeStatic,
  oldRange: RangeStatic,
  source: Sources
) => any;
type EditorChangeHandler =
  | ((
      name: "text-change",
      delta: Delta,
      oldContents: Delta,
      source: Sources
    ) => any)
  | ((
      name: "selection-change",
      range: RangeStatic,
      oldRange: RangeStatic,
      source: Sources
    ) => any);
type DebugLevel = "log" | "warn" | "error" | "info" | boolean;
type Module = { name: string; module: unknown; options?: object };

interface Options {
  theme?: string;
  debug?: DebugLevel | boolean;
  registry?: Parchment.Registry;
  readOnly?: boolean;
  container?: HTMLElement | string;
  placeholder?: string;
  bounds?: HTMLElement | string | null;
  modules?: Record<string, unknown>;
}

interface RangeStatic {
  index: number;
  length: number;
}

type Toolbar = {
  container: HTMLElement;
  controls: [string, HTMLElement][];
  handlers: Object;
  options: Object;
  quill: Quill;
};

type ContentPropType = string | Delta | undefined | null;


export type {
    Sources,
    TextChangeHandler,
    SelectionChangeHandler,
    EditorChangeHandler,
    DebugLevel,
    Module,
    Options,
    RangeStatic,
    Toolbar,
    ContentPropType
}