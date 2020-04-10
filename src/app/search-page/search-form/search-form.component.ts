import { Component, OnInit } from '@angular/core';
import { RmapiService } from 'src/app/rmapi.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Character } from 'src/app/character';
import { DirectoryComponent } from 'src/app/directory-page/directory/directory.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public characterSearchForm: FormGroup;
  public characterData: any;
  nameInput = new FormControl('');
  

  constructor(
    private formBuilder: FormBuilder,
    private _rmapiService: RmapiService
  ) { }

  ngOnInit() {
    this.characterSearchForm = this.formBuilder.group({
      characterData: ["", Validators.required]
    });
    
  }

  getCharacterFromApi(formValues) {
    this._rmapiService.getCharacter(this.nameInput.value).subscribe(data => {
      this.characterData = data.results;
      console.log(this.characterData);
    });

  }



}
