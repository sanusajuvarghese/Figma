import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from './api.service';
import { User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user!: User[];
  selectedProduct:User={id:0,emailId:"",date:"" }
  emailId: any;
  acceptTerms: any;
  employeeDetails: any;
  checkBox: boolean=true;
  formValid: boolean = false;
  constructor(private apiService: ApiService) { }
  title = '';
  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.checkBox=true;
  }
  createFormControls() {
    let emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$";
    this.emailId = new FormControl('', [Validators.required, Validators.pattern(emailPattern)]);
    this.acceptTerms = new FormControl('', [Validators.required]);
  }
  createForm() {
    this.employeeDetails = new FormGroup({
      emailId: this.emailId,
      acceptTerms: this.acceptTerms
    });
  }
  check (){
    this.checkBox= ! this.checkBox
  }
  submit(form: any) {
    debugger
   if(this.employeeDetails.valid) {
    form.value.emailId = this.selectedProduct.emailId;
    
    
    console.log(form.value);
    this.apiService.create(form.value).subscribe((user: User)=>{
			console.log("Product created, ", user);
      this.formValid=true;
     
});
    
   
   
  }


}
}

