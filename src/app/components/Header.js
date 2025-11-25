import { fetchOptions } from '@/lib/options';
import { fetchMenu } from '@/lib/menu';
import { rentMenu } from '@/lib/menu';
import { sellMenu } from '@/lib/menu';
import HeaderClient from './HeaderClient';

export default async function Header() {
  const options = await fetchOptions();
  const menu = await fetchMenu();
  const rentMenuData = await rentMenu();
  const sellMenuData = await sellMenu();  // <-- другое имя

  // console.log (rentMenuData.items);
  return (
    <HeaderClient
      options={options}
      menu={menu.items}
      workTime={options.work_time}
      analytics={options.analytics}
      rentMenu={rentMenuData.items}
      sellMenu={sellMenuData.items}
    />
  );
}