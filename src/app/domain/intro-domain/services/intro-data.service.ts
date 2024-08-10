import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AseedCrudAbstractService } from "src/app/infrastructure/services/common/crud-abstract.service";

@Injectable()
export class IntroDataService extends AseedCrudAbstractService
{
    constructor() {
        super(inject(HttpClient), 'http://localhost:7226/api/test');
    }
}
