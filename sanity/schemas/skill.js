export default {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "skillName",
            title: "SkillName",
            type: "string"
        },
        {
            name: "skillImage",
            title: "SkillImage",
            type: "image",
            options: {
                hotspot: true
            }
        },
    ]
}