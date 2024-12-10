import { styles } from '../utils/css/styles';
import {
    ExperienceComponentInterface,
    Link,
} from '../utils/types/ExperienceInterface';
import DiagonalArrow from './svgs/DiagonalArrow';

const ExperienceComponent = ({
    textColor,
    index,
    isLast,
    company,
    position,
    period,
    description,
    links,
}: ExperienceComponentInterface) => {
    return (
        <div className={`w-[60vw] max-w-[60vw] ${index != 0 ? 'mt-6' : ''}`}>
            <div className="flex justify-between gap-x-16">
                <div className="text-left text-white flex flex-col justify-between">
                    <div className="inline-flex flex-col gap-y-1">
                        <p
                            className={`${styles['header-md-no-color']} ${textColor}`}>
                            {company.toUpperCase()}
                        </p>
                        <p className={`${styles['exp-position']}`}>
                            {position}
                        </p>
                        <p
                            className={`opacity-50 tracking-widest ${styles['exp-period']}`}>
                            {period.toUpperCase()}
                        </p>
                    </div>
                    {links?.map((link: Link) => {
                        return (
                            <div className="group relative inline-block">
                                <a
                                    href={link.url}
                                    target="_blank"
                                    className={`inline-flex justify-center relative items-center ${styles['exp-link']} gap-x-1 hover:font-bold transition-all ease-in`}>
                                    {link.label}
                                    <span
                                        className={`${styles['navbar-underline']}`}></span>
                                    <DiagonalArrow
                                        fill="fill-white"
                                        width="w-3"
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className="max-w-[50%] text-justify text-white font-manrope text-sm">
                    <ul className="list-disc">
                        {description.map((desc, idx) => {
                            if (idx == 0) {
                                return <li>{desc}</li>;
                            } else {
                                return <li className="mt-1">{desc}</li>;
                            }
                        })}
                    </ul>
                </div>
            </div>
            {isLast ? null : (
                <hr className="mt-6 bg-white w-full text-white"></hr>
            )}
        </div>
    );
};

export default ExperienceComponent;
