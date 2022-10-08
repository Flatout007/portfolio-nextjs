export function fetchSkills(): Promise<Response> {

    const skillsPromise: Promise<Response> = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

    return skillsPromise;
}