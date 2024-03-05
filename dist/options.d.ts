export type ToolbarOptions = typeof toolbarOptions;
export declare const toolbarOptions: {
    essential: ({
        header: (number | boolean)[];
    }[] | ({
        list: string;
        align?: undefined;
    } | {
        align: never[];
        list?: undefined;
    })[] | (string | {
        color: never[];
    })[])[];
    minimal: (string[] | {
        header: number;
    }[] | ({
        list: string;
        align?: undefined;
    } | {
        align: never[];
        list?: undefined;
    })[])[];
    full: (string[] | {
        header: number;
    }[] | {
        list: string;
    }[] | {
        script: string;
    }[] | {
        indent: string;
    }[] | {
        direction: string;
    }[] | {
        size: (string | boolean)[];
    }[] | {
        header: (number | boolean)[];
    }[] | ({
        color: never[];
        background?: undefined;
    } | {
        background: never[];
        color?: undefined;
    })[] | {
        font: never[];
    }[] | {
        align: never[];
    }[])[];
};
