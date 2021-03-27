interface Config {
    root: string,
    compile: string,
    exec: string,

    sourcePath: string,
    source: string,
    injectLibs: string[],

    stdinTemplatePath: string,
    stdinTemplate: string,

    outDir: string,
    count: number,
}

declare const config: Config
