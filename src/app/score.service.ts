
import { Injectable } from '@angular/core';
//аналог локалстринг
import * as AppSetting from '@nativescript/core/application-settings';

@Injectable({
    providedIn: 'root'
})

export class ScoreService {

    scoreobj = { 'X': 0, 'O': 0 }; // huomaa ettÃ¤ nollan sijasta avaimena on iso O

    public initScores() {
        AppSetting.setString('scores', JSON.stringify(this.scoreobj));
    }

    public getScores() {
        return JSON.parse(AppSetting.getString('scores'));
    }

    public addScore(winner: string) {
        const scores = this.getScores();
        console.log(winner);
        if (winner === 'X') {
            scores.X++;
        }
        else {
            scores.O++;
        }      
        
        AppSetting.setString('scores', JSON.stringify(scores));
    }

}