import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterbyname'
})
export class FilterbynamePipe implements PipeTransform {

  transform(workers: any[], searchWorker:string): any[] {
    if(searchWorker == ''){
      return workers;
    }else{
      return workers.filter(worker => worker.name.toLowerCase().indexOf(searchWorker.toLowerCase()) !== -1);
    }
  }

}
