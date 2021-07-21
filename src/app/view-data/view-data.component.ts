import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';
@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
 
  users!: User[];
  emailId:any;
  p:number=1;
  selectedProduct: User = {id:0 , emailId:"",date:"" }


  constructor(private apiService: ApiService) {
    this.apiService.readProducts().subscribe((users: User[]) => {
      this.users = users;
      
      console.log(this.users);
    })
  }

  ngOnInit(): void {
   }
  
  deleteProduct(id: number){
    this.apiService.deleteProduct(id).subscribe((user: User)=>{
      console.log("Product deleted, ", user);
      this.apiService.readProducts().subscribe((user: User[])=>{
        this.users = user;
      })
    });
  }

  search(){
    if(this.emailId==""){
      this.apiService.readProducts().subscribe((user: User[])=>{
        this.users = user;
      })
    }
    else{
      this.users=this.users.filter(res =>{
        return res.emailId.toLocaleLowerCase().match(this.emailId.toLocaleLowerCase());
      });
    }
  }

  key :String='emailId';
  reverse:boolean=false;


  sort(key:String){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
