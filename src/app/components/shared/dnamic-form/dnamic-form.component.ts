import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dnamic-form',
  templateUrl: './dnamic-form.component.html',
  styleUrls: ['./dnamic-form.component.css']
})
export class DnamicFormComponent implements OnInit {

  @Input() formOptions!: any;
  @Input() AutopopulateData: any;
  @Output() emitFormData = new EventEmitter();

  formFields!: any;

  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formFields = this.formOptions.formFields
    this.form = this.fb.group({})
    this.formFields.forEach((element: any) => {
      const validators = this.addValidators(element.rules);
      const formControl = this.fb.control('', validators);
      this.form.addControl(element.name, formControl)
    });
    // this.formOptions.forEach((element: any) => {
    //   this.form.controls[element.name].patchValue(this.formValue[element.name])
    // });
    if (this.AutopopulateData) {
      Object.keys(this.form.controls).forEach(key => {
        console.log(key)
        this.form.controls[key].patchValue(this.AutopopulateData[key])
      })
    }


    this.form.valueChanges.subscribe(data => {
      this.emitFormData.emit(this.form)

    })
    console.log(this.AutopopulateData)
  }
  addValidators(rules: any): any {
    let valdators: any[] = [];
    if (rules) {

      Object.keys(rules).forEach((element: any) => {
        if (element == 'required' && rules["required"]) {
          valdators.push(Validators.required);
        } else if (element == 'maxlength') {
          valdators.push(Validators.maxLength(rules["maxlength"]));
        }
        else if (element == 'minlength') {
          valdators.push(Validators.minLength(rules["minlength"]));
        } else if (element == 'pattern') {
          valdators.push(Validators.pattern(rules["pattern"]));
        }
      }
      )
    }
    return valdators;
  }

}
