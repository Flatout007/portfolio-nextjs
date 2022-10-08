export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "projectName",
            title: "ProjectName",
            type: "string"
        },
        {
            name: "projectImage",
            title: "ProjectImage",
            type: "image",
            options: {
                hotspot: true
            }
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
        {
            name: "liveURL",
            title: "LiveURL",
            type: "string"
        },
        {
            name: "codeURL",
            title: "CodeURL",
            type: "string"
        }

    ]
}