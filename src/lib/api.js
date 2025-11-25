const WP_API = 'https://headless.zbinfo.site/wp-json';

export async function wpFetch(endpoint, options = {}) {
    const res = await fetch (`${WP_API}/${endpoint}`, {
        ...options,
        next: { revalidate: 60},
    });
    if(!res.ok) throw new Error(`Ошибка запроса: ${endpoint}`);
    return res.json();

}