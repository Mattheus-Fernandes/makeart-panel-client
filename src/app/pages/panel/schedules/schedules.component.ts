import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  public data: any

  constructor(private scheduleService: ScheduleService){}

  ngOnInit(): void {
    this.scheduleService.getAllSchedules().subscribe(res => this.data = res)
  }


  openBag(index: number){
    this.data[index].showScheduling = !this.data[index].showScheduling
  }

  deleteSchedule(id: any){
    this.scheduleService.deleteSchedule(id).subscribe(() => {
      this.data = this.data.filter((e: any) => e._id !== id)
    })
  }
}
