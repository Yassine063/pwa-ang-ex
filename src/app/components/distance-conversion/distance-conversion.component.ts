import { Component, OnInit } from '@angular/core';
import { ConversionsService } from 'src/app/conversions.service';

@Component({
  selector: 'app-distance-conversion',
  templateUrl: './distance-conversion.component.html',
  styleUrls: ['./distance-conversion.component.css']
})
export class DistanceConversionComponent implements OnInit {

  private _cm: string = '';
  private _pouce: string = '';  

  constructor(private conversionService: ConversionsService) { }

  get cm(): string {
    return this._cm;
  }
  set cm(val: string) {
    this._cm = val;
  }


  get pouce(): string {
    return this._pouce;
  }
  set pouce(val: string) { 
    this._pouce = val;
  }

  cmPouce(){
    this._pouce = '';
    const far = this.conversionService.cmpouce(Number(this._cm));
    const result = far.toString();
    this._pouce = result;
  }

  pouceCm(){
    this._cm = '';
    const far = this.conversionService.poucecm(Number(this._pouce));
    const result = far.toString();
    this._cm = result;  }


  ngOnInit(): void {
  }

}
