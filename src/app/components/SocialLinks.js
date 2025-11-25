import styles from './SocialLinks.module.css';
import Image from 'next/image';

export default function SocialLinks({ socials, allowed }) {
  const filtered = allowed
    ? socials.filter(item => allowed.includes(item.name))
    : socials;

  if (!filtered.length) return null;

  return (
    <ul className={`social-links flex align-center flex-wrap ${styles.social_links}`}>
      {filtered.map((item, index) => (
        <li className={`flex align-center ${styles.social_links_item}`} key={index}>

          <a href={item.link} target="_blank" rel="noopener noreferrer" className='flex align-center'>
           <Image
            src={item.logo.url}
            width={30}
            height={30}
            />
           <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}