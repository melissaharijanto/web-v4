export interface Link {
    label: string;
    url: string;
}

export interface ExperienceComponentInterface {
    textColor: "text-yellow" | "text-blue" | "text-red" | "text-white";
    index: number;
    isLast: boolean;
    company: string;
    position: string;
    period: string;
    description: string[];
    links?: Link[] | undefined;
}

export interface ExperienceInterface {
    company: string;
    position: string;
    period: string;
    description: string[];
    links?: Link[] | undefined;
    textColor: "text-yellow" | "text-blue" | "text-red" | "text-white";
}