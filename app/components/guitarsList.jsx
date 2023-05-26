import Guitar from "./guitar"


export default function GuitarsList({ guitars }) {
  
    return (
        <>
        <h2 className="heading">Our guitars</h2>

        { guitars?.length && (
        <div className="guitarras-grid">
            {
            guitars?.map( guitar => (
                <Guitar
                key={ guitar?.id }
                guitar={ guitar?.attributes }/>
            ))}
        </div>
        )}
        </>
  )
}
