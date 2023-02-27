import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FamousCat } from './famous-cat';
import { FamousDog } from './famous-dog';

@Injectable({
  providedIn: 'root'
})
export class PetShopService {

  constructor() { }

  public famousDogs(): Observable<FamousDog[]> {
    const famousDogs = [
      {
        "name": "Toto",
        "breed": "Cairn Terrier",
        "description": "Undeniably the most famous dog in history is Toto."
      },
      {
        "name": "Lassie",
        "breed": "Rough Collie",
        "description": "This lovable Rough Collie that’s always getting into adventures and saving the day first appeared in a short story in 1939, " +
          "but since then she’s appeared in novels, movies, TV shows and even video games! " +
          "However, she’s perhaps most known for the 19-season long TV show ‘Lassie’ which aired from 1954 – 1973."
      }
    ];

    return of(famousDogs);
  }

  public famousCats(): Observable<FamousCat[]> {
    const famousCats = [
      {
        "name": "The Chief Mouser of the United Kingdom",
        "description": ""
      },
      {
        "name": "Grumpy Cat",
        "description": "Perhaps one of the most famous cats in today’s time is the internet sensation Grumpy Cat " +
          "who’s real name is Tardar Sauce! Grumpy Cat’s unique features are due to an ailment known as feline dwarfism" +
          " and a skeletal abnormality causing a pronounced underbite. At the height of Grumpy Cat’s fame, he had more then 2.6million" +
          " followers on Instagram and 1.5million Twitter followers. Grumpy Cat passed away in 2019 at just 7 years of age."
      },
      {
        "name": "Space Cadet Felicette",
        "description": "Felicette is the first and only cat to have returned to earth after travelling to outer space! On October 18th, 1963, " +
          "Felicette was launched into space by the French aeronautical institution. French Scientists were looking at the effects of lack of " +
          "gravity on animals to better predict the outcome for humans. Felicette was chosen for the tricky mission out of " +
          "13 other cats in training due to her calm nature."
      }
    ];

    return of(famousCats);
  }
}
