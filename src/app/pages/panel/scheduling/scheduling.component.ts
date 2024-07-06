import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit{
  //@ts-ignore
  public schedulingForm: FormGroup
  public msg: string = ''
  public hasMsg = false
  public done: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private scheduleService: ScheduleService
  ){}


  ngOnInit(): void {
    const currentDate = new Date().toISOString().substring(0, 10);

    this.schedulingForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      bag: ['' , Validators.required],
      day: [currentDate , Validators.required],
      paymentStatus: ['', Validators.required]
    })
  }

  hiddenMsg(){
    this.hasMsg = false
  }

  onSubmit(){
    const clientName = this.schedulingForm.get("clientName")?.value

    if(this.schedulingForm.valid){
      const formValue = this.schedulingForm.value;
      const bagArray = formValue.bag.split(',').map((item: string) => item.trim());
      
      const data = {
        ...formValue, products: bagArray
      }

      this.scheduleService.registerSchedule(data).subscribe({
        next: (res) => {
          if(res.success){
            this.msg = `${res.msg} para ${clientName}`
            this.hasMsg = true
            this.done = true
            this.schedulingForm.reset()    
          }
        },
        error: (err) => {
          this.msg = err.error.msg
          this.hasMsg = true
          this.done = false
        }  
      })

      setTimeout(() => {
        this.hasMsg = false
      },4000)
    }


  }
}
