// Type definitions for webpack-log 1.3
// Project: https://github.com/shellscape/webpack-log
// Definitions by: Yukimasa Funaoka <https://github.com/mochiya98>
// Definitions: -

export = webpackLog;

declare function webpackLog(
  options?: Partial<webpackLog.WebpackLogOptions>
): webpackLog.WebpackLogger;

declare namespace webpackLog {
  type LogLevelEnum = "trace" | "debug" | "info" | "warn" | "error" | "silent";
  type WebpackLogOptions = {
    level: LogLevelEnum;
    name: string;
    timestamp: boolean;
    unique: boolean;
  };
  class WebpackLogger {
    trace(...msg: any[]): void;
    debug(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
  }
}
