import {InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 11, name: 'Ahmad'},
            {id: 12, name: 'Ali'},
            {id: 13, name: 'Usman'},
            {id: 14, name: 'Fakhar'},
            {id: 15, name: 'Akhtar'},
            {id: 16, name: 'Hassan'},
            {id: 18, name: 'Khurram'},
            {id: 19, name: 'Aman'},
            {id: 20, name: 'Hamza'},
        ];
        return {heroes};
    }
    genId(heroes: Hero[]): number {
        return heroes.length >0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}