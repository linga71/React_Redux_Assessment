import Enzyme from 'enzyme';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import action_Types from '../actions/actionTypes'
configure({adapter: new Adapter()});
import Pokemonreducer from '../reducers/Pokemonreducer'
const INITIAL_STATE = {
    result:[],
    error: null
}
describe(' reducers pokemonReducer', () => {
    
    it("should return ddefault state", ()=>{
       const newstate = Pokemonreducer(INITIAL_STATE,{});
       expect(newstate).toEqual(INITIAL_STATE);
    })

    it("Set Dropdown test",()=>{
        const value = ['wartortle'];
        const newstate =Pokemonreducer(INITIAL_STATE,{
            type:action_Types.SET_DROPDOWN_VALUES,
            payload:value
        });
        //console.log(newstate);
        expect(newstate.result).toBeDefined
    })

    it('Error message', ()=>{
        const newstate =Pokemonreducer(INITIAL_STATE,{
            type:action_Types.error_msg,
            payload:null
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            error:null
          })
    })
})