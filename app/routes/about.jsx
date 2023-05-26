import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/about.css';

export function meta() {
  return ([
    { title: 'GuitarLA - About us' },
    { description: 'Guitars dealer, music blog, learning' }
  ])
}

export function links() {
  return [
    { rel: 'stylesheet',
      href: styles
    },
    
    { rel: 'preload',
      href: imagen,
      as: 'image' }
  ]
}

export default function About() {
  return (
    <main className="contenedor nosotros">
      
      <h2 className="heading">About us</h2>

      <div className="contenido">
        <img src={ imagen } alt="about us image" />
        <div>
          <p>Integer at orci id sapien scelerisque aliquam sit amet placerat massa. Duis et tellus non felis suscipit porttitor nec eget nunc. Praesent mauris ipsum, suscipit in tempor vitae, lobortis eu nulla. Vestibulum viverra sit amet nisl vel ullamcorper. Aliquam eget ante rhoncus, cursus mauris at, mattis velit. Praesent pharetra enim urna. Vestibulum malesuada tristique diam id consectetur. Proin lacinia augue leo, non tristique nibh sodales nec. Pellentesque consectetur dapibus ex. </p>
          <p>Integer at orci id sapien scelerisque aliquam sit amet placerat massa. Duis et tellus non felis suscipit porttitor nec eget nunc. Praesent mauris ipsum, suscipit in tempor vitae, lobortis eu nulla. Vestibulum viverra sit amet nisl vel ullamcorper. Aliquam eget ante rhoncus, cursus mauris at, mattis velit.</p>
        </div>
      </div>
    </main>
  )
}
