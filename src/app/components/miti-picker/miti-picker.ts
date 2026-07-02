import { Component } from '@angular/core';

interface NepaliDay {
  nepaliDayNumber: string; // e.g. "१", "२" or "1", "2"
  dateString: string;       // YYYY-MM-DD standardizer
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-miti-picker',
  imports: [],
  templateUrl: './miti-picker.html',
  styleUrl: './miti-picker.css',
})
export class MitiPicker {
  formattedNepaliDate: string = '';
  currentNepaliMonthName: string = 'Baishakh';
  currentNepaliYear: number = 2083;
  calendarDays: NepaliDay[] = []; // Your generator array

  selectDate(day: NepaliDay) {
    this.formattedNepaliDate = day.dateString;

    // Close the native popover programmatically
    const popover = document.getElementById('nepali-calendar-popover');
    if (popover) {
      (popover as any).hidePopover();
    }
  }

  prevMonth() { /* Logic to shift Bikram Sambat calendar back */ }
  nextMonth() { /* Logic to shift Bikram Sambat calendar forward */ }
  isSelected(day: NepaliDay): boolean { return this.formattedNepaliDate === day.dateString; }

}
