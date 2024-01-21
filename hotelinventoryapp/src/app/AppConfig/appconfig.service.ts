import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface.js";
import { environment } from "../../environments/environment.prod.js";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint : environment.apiEndpoint,
}