export function fetchProjects(): Promise<Response> {

    const projectsPromise: Promise<Response> = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

    return projectsPromise;
}