import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText!: string
 
  constructor(private faceSnapsService: FaceSnapsService, private router: Router){}
  ngOnInit():void {
    this.buttonText='Oh Snap!'
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
}
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
