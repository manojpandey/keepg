import Vue from 'vue'
import App from './App'
// import Firebase from 'firebase'

// let firebase = new Firebase('https://keepg.firebaseio.com/')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

// firebase.child('notes').set([
//   {title: 'Hello world', content: 'Lorem ipsum'}
// ])

// firebase.child('notes').on('value', (snapshot) => {
//   let notes = snapshot.val()
//   console.log(notes)
//   window.alert(notes[0].title)
// })
