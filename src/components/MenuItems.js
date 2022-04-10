/* eslint-disable import/no-named-as-default */
import { Stack } from '@twilio-paste/stack';
import { MenuItemContainer } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => (
  <Stack orientation="vertical" spacing="space60">
    {items.map((item) => (
      <MenuItemContainer {...item} key={item.uuid} />
    ))}
  </Stack>
);
