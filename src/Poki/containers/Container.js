
import { connect } from 'react-redux';
import Poki from '../components/Poki';


export const mapStateToProps = state => ({
  getSelectedValue: state.event.selectValue,
});

const Container = connect(mapStateToProps)(Poki);

export default Container;