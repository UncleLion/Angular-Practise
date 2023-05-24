import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-eror',
  templateUrl: './global-eror.component.html',
  styleUrls: ['./global-eror.component.scss']
})
export class GlobalErorComponent {

constructor(public errorService: ErrorService) { };

ngOnInit(): void {

}


}
