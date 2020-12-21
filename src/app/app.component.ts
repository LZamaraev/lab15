import {Component, OnInit} from '@angular/core';
import {
  MyWorker,
  MyWorkerType,
} from './shared/worker.model';
import {HttpWorkerService} from "./services/http-worker.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;
  searchName = '';
  searchSurname = '';
  constructor(private httpWorkerService: HttpWorkerService) {
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.httpWorkerService.getWorker();
    } catch (error) {
      console.log(error);
    }
  }

  getByType(type:number){
    return this.workers?.filter(worker=>worker.type==type);
  }

  async onDeleteById(id: number) {
    try {
      await this.httpWorkerService.deleteWorker(id);
    } catch (error) {
      console.log(error);
    } finally {
      this.getData();
    }
  }

  async onAddWorker(worker) {
    const id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    try {
      await this.httpWorkerService.postWorker(worker);
    } catch (error) {
      console.log(error)
    } finally {
      this.getData();
    }
  }

  onEditWorker = async (editWorker: MyWorker) => {
    const worker = this.workers.find(worker => editWorker.id == worker.id)
    if (worker == undefined) {
      alert("Сотрудника с таким id не существует.")
    } else {
      worker.name = editWorker.name;
      worker.surname = editWorker.surname;
      worker.type = editWorker.type;
      worker.phone = editWorker.phone;

      try {
        await this.httpWorkerService.editWorker(worker);
      } catch (error) {
        console.log(error)
      } finally {
        this.getData();
      }
    }
  }
}
