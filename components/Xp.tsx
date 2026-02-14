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
        <a href={link} target="_blank">
            <div id = "xpCard">

                <div id ="xpLeft">

                    <span>{date}</span>
        
                </div>

                <div id = "xpRight">
                    <b>{company}</b>
                    <i>{title}</i>
                    <br></br>
                    <span>{description}</span>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                        ))}
                    </div>
                
                </div>

            </div>
        </a>
        
    );

}