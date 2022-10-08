export function fetchExperiences(): Promise<Response> {

    const experiencePromise: Promise<Response> = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`)

    return experiencePromise;
}
