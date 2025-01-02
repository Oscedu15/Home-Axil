import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const links =[
    {path:'/', name:'home'},
    {path:'/about', name:'about'},
    {path:'/gallery', name:'gallery'},
    {path:'/projects', name:'projects'},
    {path:'/contact', name:'contact'},
]

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {

    const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
        {links?.map((link,index) =>{
            return (
                <Link href={link.path} key={index}
                 className={`uppercase ${linkStyles} `}
                 >{link.path === path && (
                    <motion.span initial={{y: '-100%'}} animate={{y: 0}}
                    transition={{type: 'tween'}} layoutId="underline" 
                    className={`${underlineStyles}`}/>
                 )}
                    {link.name}
                </Link>
            )
})}
    <Link href='https://github.com/Oscedu15' target='_blank' className="absolute bottom-4 lg:hidden">
        <p className="text-primary font-bold mt-20">
        Developed by: <span className="italic dark:text-white">Oscar Garcia</span></p>
    </Link>
    </nav>
  )
}

export default Nav