import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface SanityBody {
    "_createdAt": string;
    "_id": string;
    "_rev": string;
    "_updatedAt": string;
}

interface TechStack extends SanityBody {
    "skillImage": SanityImageSource;
    "skillName": string;
}

interface Social extends SanityBody {
    "_type": "social";
    "title": string;
    "url": string;
    "socialName": string;
    "socialURL": string;
}

interface Experiences extends SanityBody {
    "bulletPoints": string[];
    "companyImage": SanityImageSource;
    "companyName": string;
    "dateEnd": string;
    "dateStart": string;
    "isCurrentlyWorkingHere": boolean;
    "techStack": TechStack[];
    "JobTitle": string;
    "_type": "experience";
}

interface Skill extends SanityBody {
    "skillName": string;
    "skillImage": SanityImageSource;
}

interface Project extends SanityBody {
    "_type": "project";
    "projectImage": SanityImageSource;
    "projectName": string;
    "techStack": TechStack[];
    "codeURL": string;
    "liveURL": string;
}