import { error } from 'console';
import * as dotenv from 'dotenv';
import * as path from 'path';

export class ConfigManager{
    private static loaded = false;

    private static loadConfig(): void{
        if (this.loaded){
            return;
        }
        const environment = process.env.ENV || 'qa'
        const envFile = path.resolve(process.cwd(), `.env.${environment}`);
        const result = dotenv.config({path:envFile});

        if(result.error){
            throw new Error(`Environemnt File not found: ${envFile}`);
        }

        this.loaded=true;
    }

    private static getValue(key:string):string{
        this.loadConfig();
        const value = process.env[key];
        if(!value){
            throw new Error(`Missing configuration value: ${key}`);
        }
        return value;
    }
    public static get baseUrl(): string {
        return this.getValue('BASE_URL');
    }

    public static get browser(): string {
        return this.getValue('BROWSER');
    }

    public static get headless(): boolean {
        return this.getValue('HEADLESS').toLowerCase() === 'true';
    }

    public static get timeout(): number {
        return Number(this.getValue('TIMEOUT'));
    }
}