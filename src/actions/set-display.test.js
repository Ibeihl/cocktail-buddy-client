import {SET_DISPLAY_CAT, setDisplayCat } from './set-display';

describe('setDisplayCat', () => {
    it('Should return the action', () => {
        const displayCat = 'display';
        const action = setDisplayCat(displayCat);
        expect(action.type).toEqual(SET_DISPLAY_CAT);
        expect(action.displayCat).toEqual(displayCat);
    });
});