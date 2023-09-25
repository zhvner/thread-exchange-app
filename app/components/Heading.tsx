'use-client';

interface HeadingProps {
    title?: string;
    midtitle?: string;
    subtitle?: string;
    content?: string;
    center?: boolean;
}


const Heading:React.FC<HeadingProps> = ({
    title,
    midtitle,
    subtitle,
    content,
    center
}) => {
    return (
        <div className={center?'text-center': 'text-start'}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="text-xl font-bold">
                {midtitle}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
            <div className="text-base text-neutral-500 mt-2">
                {content}
            </div>

        </div>
    )
} 

export default Heading;