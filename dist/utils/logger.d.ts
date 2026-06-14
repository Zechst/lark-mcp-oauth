export declare enum LogLevel {
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4
}
export declare class Logger {
    private level;
    static logFilesToKeep: number;
    static logFilePrefix: string;
    constructor();
    get logFileName(): string;
    initLogFile: () => void;
    cleanHistoryLogFile: () => void;
    setLevel: (level: LogLevel) => void;
    log: (message: string) => void;
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
}
export declare const logger: Logger;
