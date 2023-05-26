
export async function getCourse() {
    const resp = await fetch(`${ process.env.API_URL }/course?populate=image`)
    return await resp.json()
}
