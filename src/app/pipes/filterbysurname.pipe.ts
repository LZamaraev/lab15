import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterbysurname'
})
export class FilterbysurnamePipe implements PipeTransform {

  transform(workers: any[], searchWorker:string): any[] {
    if(searchWorker == ''){
      return workers;
    }else{
      return workers.filter(worker => worker.surname.toLowerCase().indexOf(searchWorker.toLowerCase()) !== -1);
    }
  }


}
