export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "JobTitle",
            title: "JobTitle",
            type: "string"
        },
        {
            name: "companyImage",
            title: "CompanyImage",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "companyName",
            title: "CompanyName",
            type: "string"
        },
        {
            name: "dateStart",
            title: "DateStart",
            type: "date"
        },
        {
            name: "dateEnd",
            title: "DateEnd",
            type: "date"
        },
        {
            name: "isCurrentlyWorkingHere",
            title: "IsCurrentlyWorkingHere",
            type: "boolean"
        },
        {
            name: "techStack",
            title: "TechStack",
            type: "array",
            of: [{type: "reference", to: {type: "skill"}}]
        },
        {
            name: "bulletPoints",
            title: "BulletPoints",
            type: "array",
            of: [{type: "string"}]
        },
    ]
}