import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Constants } from '../constants';
import { DayService } from '../services/day.service';
import { DayInfo } from '../types';
import { Utils } from '../utils';

@Component({
    selector: 'app-period-table',
    templateUrl: './period-table.component.html',
})
export class PeriodTableComponent {
    daysWithoutToday$: Observable<DayInfo[]>;
    liveToday$: Observable<DayInfo | null>;
    defaultTimeFormat = Constants.defaultTimeFormat;

    modalOpened: boolean = false;
    selectedPeriodId: number | null = null;

    constructor(dayService: DayService) {
        this.daysWithoutToday$ = dayService.days$.pipe(map(days => days.filter(day => !day.isToday)));
        this.liveToday$ = dayService.liveToday$;
    }

    getHours(ms: number): number {
        return Utils.msToHours(ms);
    }

    getMinutes(ms: number): number {
        return Utils.msToMinutes(ms);
    }

    openModal(periodId: number): void {
        // this.selectedPeriodId = periodId;
        // this.modalOpened = true;
    }

    closeModal(): void {
        this.selectedPeriodId = null;
        this.modalOpened = false;
    }
}
