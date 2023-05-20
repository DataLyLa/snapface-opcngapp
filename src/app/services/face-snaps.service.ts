import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[]= [
      {
        id: 3,
        title: 'All aboard',
      description: 'New advenure!!',
      imageUrl:'https://cdn.pixabay.com/photo/2022/07/25/08/19/lake-balaton-7343151_1280.jpg', 
      createdDate: new Date(), 
      snaps: 10,
      location: 'On the sea...'
     },
     {
        id: 2,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 40
      },
      {
        id: 3,
        title: 'Lovers',
        description: ' Mean to share together...',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg',
        createdDate: new Date(), 
        snaps: 120}
    ]

    getAllFaceSnpas(): FaceSnap[]{
        return this.faceSnaps
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap= this.faceSnaps.find(faceSnap=> faceSnap.id === faceSnapId)
        if(!faceSnap){
            throw new Error('FaceSnap not found')
        }else{
            return faceSnap
        }
    }

    snapFaceSnapsById(faceSnapId: number, snapType: 'snap'|'unsnap'): void{
       const faceSnap = this.getFaceSnapById(faceSnapId)
       snapType === 'snap'? faceSnap.snaps++: faceSnap.snaps--
    }
  }
