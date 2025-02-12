import { styles } from '../utils/css/styles';
import {
    ExperienceComponentInterface,
    Link,
} from '../utils/types/ExperienceInterface';
import SmallLink from './SmallLink';

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
        <div className={`${index != 0 ? 'mt-6' : ''}`}>
            <div className="flex lg:flex-row flex-col justify-between gap-x-16">
                <div className="text-left text-white flex flex-col justify-between">
                    <div className="inline-flex flex-col gap-y-1">
                        <p
                            className={`${styles['header-md-no-color']} ${
                                textColor === 'text-yellow'
                                    ? 'text-orange dark:text-yellow'
                                    : textColor
                            }`}>
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
                    <div className="flex gap-x-4">
                        {links?.map((link: Link) => {
                            return (
                                <SmallLink link={link.url} label={link.label} />
                            );
                        })}
                    </div>
                </div>
                <div
                    className={`w-full mt-4 lg:mt-0 lg:max-w-[50%] text-justify text-black dark:text-white ${styles['paragraph-text']}`}>
                    <ul className="list-disc">
                        {description.map((desc, idx) => {
                            if (idx == 0) {
                                return <li key={idx}>{desc}</li>;
                            } else {
                                return (
                                    <li className="mt-1" key={idx}>
                                        {desc}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
            {isLast ? null : (
                <hr className="mt-6 w-full dark:border-white border-black"></hr>
            )}
        </div>
    );
};

export default ExperienceComponent;
