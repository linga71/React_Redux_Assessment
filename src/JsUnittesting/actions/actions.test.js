import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import action_Types from  '../../Poki/actions/actionTypes';
import MockAdapter from 'axios-mock-adapter';
import fetchAbilities from '../../Poki/actions/action'
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);



describe('fetchAbilities actions', () => {
    beforeEach(() => {
        store.clearActions();
      });
      const store = mockStore();
      store.dispatch(fetchAbilities());
    const payload = {name: "blaze" ,name:"solar-power"}
    it('dispatches fetchAbilities after a successfull API requets', () => {
        mock.onGet("https://pokeapi.co/api/v2/pokemon/charmeleon").reply(200, payload )
          store.dispatch(fetchAbilities("charmeleon")).then(() => {
            let expectedActions =              
                {
                    type: action_Types.SET_DROPDOWN_VALUES,
                    payload: payload
                }
            expect(store.getActions()[0]).toEqual(expectedActions)
        });
    });
})