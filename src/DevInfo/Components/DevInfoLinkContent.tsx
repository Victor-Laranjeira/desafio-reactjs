import { ReactNode } from "react";
import style from '../DevInfo.module.css'
import { Link } from "react-router-dom";

interface DevInfoLinkContentProps {
  children: ReactNode;
  title: string;
  link: string;
}

function DevInfoLinkContent({children, title, link}: DevInfoLinkContentProps) {
  return (
    <div className={style.link}>
      {children}
      <a href={link} target="_blank">{title}</a>
    </div>
  )
}

export default DevInfoLinkContent;