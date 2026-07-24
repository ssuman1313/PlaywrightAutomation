import * as winston from 'winston';

export class Logger {

    private static logger = winston.createLogger({
        level: 'info',

        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf(({ level, message, timestamp }) => {
                return `${timestamp} [${level.toUpperCase()}] ${message}`;
            })
        ),

        transports: [
            new winston.transports.Console(),

            new winston.transports.File({
                filename: 'logs/automation.log'
            })
        ]
    });

    public static info(message: string): void {
        this.logger.info(message);
    }

    public static warn(message: string): void {
        this.logger.warn(message);
    }

    public static error(message: string): void {
        this.logger.error(message);
    }

    public static debug(message: string): void {
        this.logger.debug(message);
    }

}