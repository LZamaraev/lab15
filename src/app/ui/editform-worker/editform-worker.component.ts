import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyWorker, MyWorkerType} from "../../shared/worker.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  workerForm:FormGroup;
  id:number;
  name:string = '';
  surname:string = '';
  type:number = 0;
  phone: string = ''
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  @Output() editWorker = new EventEmitter<MyWorker>();
  constructor() {
    this.workerForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    })
  }
  ngOnInit(): void {}
  onEditWorker = ()=>{
    this.editWorker.emit(this.workerForm.value);
  }
}
