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
  calendarDays: NepaliDay[] = [
    { nepaliDayNumber: '1', dateString: '2083-01-01', isCurrentMonth: true },
    { nepaliDayNumber: '2', dateString: '2083-01-02', isCurrentMonth: true },
    { nepaliDayNumber: '3', dateString: '2083-01-03', isCurrentMonth: true },
    { nepaliDayNumber: '4', dateString: '2083-01-04', isCurrentMonth: true },
    { nepaliDayNumber: '5', dateString: '2083-01-05', isCurrentMonth: true },
    { nepaliDayNumber: '6', dateString: '2083-01-06', isCurrentMonth: true },
    { nepaliDayNumber: '7', dateString: '2083-01-07', isCurrentMonth: true },
    { nepaliDayNumber: '8', dateString: '2083-01-08', isCurrentMonth: true },
    { nepaliDayNumber: '9', dateString: '2083-01-09', isCurrentMonth: true },
    { nepaliDayNumber: '10', dateString: '2083-01-10', isCurrentMonth: true },
    { nepaliDayNumber: '11', dateString: '2083-01-11', isCurrentMonth: true },
    { nepaliDayNumber: '12', dateString: '2083-01-12', isCurrentMonth: true },
    { nepaliDayNumber: '13', dateString: '2083-01-13', isCurrentMonth: true },
    { nepaliDayNumber: '14', dateString: '2083-01-14', isCurrentMonth: true },
    { nepaliDayNumber: '15', dateString: '2083-01-15', isCurrentMonth: true },
    { nepaliDayNumber: '16', dateString: '2083-01-16', isCurrentMonth: true },
    { nepaliDayNumber: '17', dateString: '2083-01-17', isCurrentMonth: true },
    { nepaliDayNumber: '18', dateString: '2083-01-18', isCurrentMonth: true },
    { nepaliDayNumber: '19', dateString: '2083-01-19', isCurrentMonth: true },
    { nepaliDayNumber: '20', dateString: '2083-01-20', isCurrentMonth: true },
    { nepaliDayNumber: '21', dateString: '2083-01-21', isCurrentMonth: true },
    { nepaliDayNumber: '22', dateString: '2083-01-22', isCurrentMonth: true },
    { nepaliDayNumber: '23', dateString: '2083-01-23', isCurrentMonth: true },
    { nepaliDayNumber: '24', dateString: '2083-01-24', isCurrentMonth: true },
    { nepaliDayNumber: '25', dateString: '2083-01-25', isCurrentMonth: true },
    { nepaliDayNumber: '26', dateString: '2083-01-26', isCurrentMonth: true },
    { nepaliDayNumber: '27', dateString: '2083-01-27', isCurrentMonth: true },
    { nepaliDayNumber: '28', dateString: '2083-01-28', isCurrentMonth: true },
    { nepaliDayNumber: '29', dateString: '2083-01-29', isCurrentMonth: true },
    { nepaliDayNumber: '30', dateString: '2083-01-30', isCurrentMonth: true },
    { nepaliDayNumber: '31', dateString: '2083-01-31', isCurrentMonth: true },
  ]; // Your generator array

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
