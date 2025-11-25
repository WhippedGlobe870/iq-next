import { wpFetch } from "./api";

export async function fetchOptions() {
    return wpFetch('acf/v3/group-11');

}