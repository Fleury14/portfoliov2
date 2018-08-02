import { IContact } from "../interfaces/contact";

export class ContactList {
    public contacts: IContact[] = [
        {
            href: 'http://twitter.com/lqfleury14',
            class: 'fab fa-twitter-square contact-icon',
            value: 'LQFleury14',
            animate: false
        },
        {
            href: 'mailto:lruggierojr@gmail.com',
            class: 'far fa-envelope',
            value: 'lruggierojr@gmail.com',
            animate: false
        },
        {
            href: 'http://github.com/fleury14',
            class: 'fab fa-github',
            value: 'Fleury14',
            animate: false
        },
        {
            href: 'https://www.linkedin.com/in/leonard-ruggiero-jr-bba192152/',
            class: 'fab fa-linkedin-in',
            value: 'LinkedIn',
            animate: false
        }        
    ]
}