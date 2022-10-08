import createImageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ClientConfig, createClient, SanityClient } from "next-sanity";

// connect sanity to frontend
export const config: ClientConfig | any = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "v2021-10-21",
    useCdn: process.env.NODE_ENV === "production"
};

export const client: SanityClient = createClient(config);

// helper function to easily get url for images
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
    return createImageUrlBuilder(config).image(source);
}