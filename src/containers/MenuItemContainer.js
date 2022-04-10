import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity,
} from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updatePrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity),
    },
    dispatch
  );

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
