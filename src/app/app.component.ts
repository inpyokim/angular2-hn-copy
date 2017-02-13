import { Component, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire){
    this.items = af.database.list('/items', { preserveSnapshot: true});
    this.items.subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(`*Firebase Database: items[${snapshot.key}] = "${snapshot.val()}"`);
        });
    })
  }
}
