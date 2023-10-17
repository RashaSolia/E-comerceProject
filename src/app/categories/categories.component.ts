import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  catArr:any[]=[]

  constructor(private _DataService:DataService){
    this.getCategories()

  }
  getCategories(){ 

    this._DataService.getData('categories').subscribe((response)=>{
  this.catArr=response.data
      console.log(this.catArr)
    
    })
  
  }
}
