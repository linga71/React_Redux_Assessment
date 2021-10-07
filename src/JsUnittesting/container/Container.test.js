import {mapStateToProps} from "../../Poki/containers/Container";
describe("App Container",() => {
    it(" map state to props", () => {
        const INITIAL_STATE = {
            event : { 
            selectValue: '1',
            error : null,          
          }};       
        expect(mapStateToProps(INITIAL_STATE).getSelectedValue).toEqual('1');
    })
})