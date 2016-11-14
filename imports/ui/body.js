import { Template } from 'meteor/templating';
import { Tasks } from '../api/datab.js';
import './task.js';
import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 }});
  },
});

console.log('Test');

Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    target.text.value = '';
  },
});
