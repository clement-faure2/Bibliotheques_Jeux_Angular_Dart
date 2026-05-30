import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),

    provideFirebaseApp(() => 
      initializeApp({
          apiKey: "AIzaSyAWmEJZFxZeXUpEyP4fARbG2axr4zoHUII",
          authDomain: "concert-hall-project-angular.firebaseapp.com",
          projectId: "concert-hall-project-angular",
          storageBucket: "concert-hall-project-angular.firebasestorage.app",
          messagingSenderId: "765841960830",
          appId: "1:765841960830:web:5644fa6f600cefb993cd2f",
          measurementId: "G-YKL03EQT3Y"
        }
      )
      ),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth())
  ]
};
