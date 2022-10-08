export function fetchSocials() {

    const socialPromise: Promise<Response> = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    return socialPromise;
}
