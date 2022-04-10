import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// explanation of what mapDispatchToProps = {...} does
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price),
//     },
//     dispatch
//   );

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price),
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
