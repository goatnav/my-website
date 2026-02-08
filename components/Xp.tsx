type xp = {

    date:string;
    company:string;
    title:string;
    description:string;
    tags: string[];
    link?:string;

}


export default function Xp({
  date,
  title,
  company,
  description,
  tags,
  link
}: xp){
    return(
        <a href={link}>
            <div id = "xpCard">

                <div id ="xpLeft">

                    <span>{date}</span>
        
                </div>

                <div id = "xpRight">
                    <span>{company}</span>
                    <i>{title}</i>
                    <span>{description}</span>
                    <div id = "tag">
                        {
                        tags.map((t) => (<span>{t}</span>))
                        }

                    </div>
                
                </div>

            </div>
        </a>
        
    );

}