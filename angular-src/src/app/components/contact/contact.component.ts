import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IContact } from '../../interfaces/contact';
import { ContactList } from '../../classes/contacts';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('contactState', [
        state('init', style({
            transform: 'translateX(-40%)',
            opacity: 0
        })),
        state('complete', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('init => complete', animate('1500ms ease-out'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  private contactClass: ContactList = new ContactList();
  public contacts:IContact[] = this.contactClass.contacts;

  constructor() { }

  ngOnInit() {
    this.contacts.forEach( (contact, index) => {
      setTimeout( () => { contact.animate = true; }, (index * 700) )
    })
  }

}