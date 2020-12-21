import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  workerForm: FormGroup
  name: string = '';
  surname: string = '';
  phone: string = ''
  type = 0;
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  @Output() addWorker = new EventEmitter<MyWorker>();
  setDisable = () => this.name === '' || this.surname === '' || this.phone === '';
  constructor() {
    this.workerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    })
  }
  ngOnInit(): void {}

  onAddWorker() {
    this.addWorker.emit(this.workerForm.value);
  }
}
