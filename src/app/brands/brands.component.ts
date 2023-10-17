import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  branArr:any[]=[]

  constructor(private _DataService:DataService){
    this.getBrabds()
  
  }
  getBrabds(){ 

    this._DataService.getData('brands').subscribe((response)=>{
  this.branArr=response.data
      console.log(this.branArr)
    
    })
  
  }
}
