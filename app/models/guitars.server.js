
export async function getGuitars() {
    const resp = await fetch(`${ process.env.API_URL }/guitars?populate=image`)
    return await resp.json()
}

export async function getGuitar( url ) {
    const resp = await fetch(`${ process.env.API_URL }/guitars?filters[url]=${ url }&populate=image`)
    return await resp.json()
}
