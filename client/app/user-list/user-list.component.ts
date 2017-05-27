import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { bloodUserListService } from '../services/bloodUser.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isLoading = true;
  addUserForm: FormGroup;
  // name = new FormControl('', Validators.required);
  //age = new FormControl('', Validators.required);
  //weight = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  group = new FormControl('', Validators.required);
  phone = new FormControl('', Validators.required);
  pincode = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  state = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  village = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  constructor(private blooUserService: bloodUserListService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) { }

  ngOnInit() {

    this.addUserForm = this.formBuilder.group({
      name: this.name,
      group: this.group,
      phone: this.phone,
      pincode: this.pincode,
      country: this.country,
      state: this.state,
      city: this.city,
      village: this.village,
      email: this.email
    });
    this.isLoading = false;

    //this.addBloodUser();
  }

  addBloodUser() {
    this.blooUserService.addBloodUser(this.addUserForm.value).subscribe(
      res => {
        const newUser = res.json();
        // this.cats.push(newCat);
        this.addUserForm.reset();
        this.toast.setMessage('Your Details added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

}
