import FooterClient from './FooterClient';
import { fetchOptions } from '@/lib/options';


export default async function Footer (){
    const options = await fetchOptions();

    return(
        <FooterClient options={options}  footerWorkTime={options.work_time_footer} workTime={options.work_time} socials={options.socials}/>
    )
}