import { wpFetch } from "./api";

export async function fetchMenu() {
    return wpFetch('menus/v1/menus/main-menu');

}

export async function rentMenu() {
    return wpFetch('menus/v1/menus/rent-menu');

}

export async function sellMenu() {
    return wpFetch('menus/v1/menus/sell-menu');

}