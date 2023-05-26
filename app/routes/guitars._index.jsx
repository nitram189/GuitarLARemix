import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarsList from "../components/guitarsList";


export function meta() {
  return [
    { title: 'GuitarLA - Market' },
    { description: 'music instruments, guitar shop, buy online, cheap courses' }
  ]
}

export async function loader() {
  const guitars = await getGuitars()
  return guitars.data
}


export default function Market() {

  const guitars = useLoaderData();

  return (
      <GuitarsList
        guitars={ guitars }/>
    
  )
}
