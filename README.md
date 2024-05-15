# Single One Page Proyecto Intermodular 1DAW 
![Imagen de Portada](img/la-sante-logo-oro.png)

## Descripción
Este proyecto es una single one page cuyo tema trata sobre un centro de especialidades, el centro es real y se atienden especialidades de diferentes ambitos:
odontología, fisioterapia, estética, podología, psicología y medicina estética.

Su objetivo principal es brindar una presencia en línea efectiva para el centro de especialidades, facilitando la comunicación con los pacientes y promoviendo sus servicios de manera clara y atractiva, así como poner en práctica todo el aprendizaje recibido durante el curso 2023/2024 en ciclo superior en Desarrollo de Aplicaciones web, especialmente en la asignatura “Lenguaje de marcas y sistemas de gestión de la información”.

## Características
- Single One Page con interfaz limpia y clara.
- Fácil navegabilidad para el usuario.
- Información detallada sobre las especialidades y los tratamientos que las componen.
- Galería de imagenes del centro y sus diferentes servicios.
- Formulario de contacto para que los visitantes puedan enviar mensajes directamente.

## Instalación
No se requiere instalación. Solo necesitas descargar los archivos del repositorio y abrir `index.html` en tu navegador web.
Estos fichero constan de una carpeta principal que se compone de:
- css -> carpeta que contiene el fichero `styles.css` con los estilos de la web.
- img -> carpeta que contiene las imagenes que utilizará la web.
- js -> carpeta que contiene los scripts en javascript de algunas animaciones creadas en la web.
- `index.html` -> estructura html de la cuál se compone la Single One page.

## Uso
Una vez descargado, puedes navegar por el sitio web abriendo el archivo `index.html` en tu navegador favorito.

### Ejemplo de código HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Santé</title>
    <link rel="stylesheet" href="">
</head>
<body>
    
    <!-- Menú de selección de la parte superior de la web -->
    <nav>
        <a href="#">Home</a>
        <a href="#sobreNosotros">Sobre Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Galería</a>
        <a href="#contacto">Contacto</a>
    </nav>
    

    <h2>Centro médico y estético<br>volver a sonreir con confianza</h2>

    <section>
        <h2 id="sobreNosotros">Sobre nosotros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales neque a semper accumsan. Donec dignissim pretium ipsum sed porttitor. Praesent eget urna quis dui laoreet dapibus. Cras tristique lobortis ante sed ultrices. Nunc rhoncus purus elit, et faucibus est mattis vel. Etiam efficitur nisi ac lacus fringilla, at fringilla elit condimentum. </p>
        <p>Etiam rhoncus ultricies ullamcorper. Pellentesque auctor augue a ipsum fermentum tincidunt. Donec felis diam, egestas blandit turpis non, luctus luctus est. In molestie nibh a urna tincidunt, id lobortis felis auctor. Integer fringilla metus non elit feugiat, non porta metus fermentum. Proin tincidunt vulputate massa, quis venenatis ligula aliquam sodales. Vivamus pulvinar, dui nec lacinia congue, sapien magna auctor libero, vitae iaculis odio lorem maximus ante. Sed vel sapien rhoncus sem tincidunt feugiat.</p>

        <img src="" alt="">
        <img src="" alt="Dos trabajadores del centro médico estético apoyados espalda contra espalda, con el uniforme blanco, cruzados de brazos y sonriendo.">

    </section>

    <section>
        <h2 id="servicios">Servicios</h2>

        <p>Odontología</p>
        <img src="" alt="">

        <p>Fisioterapia</p>
        <img src="" alt="">

        <p>Estética</p>
        <img src="" alt="">

        <p>Podología</p>
        <img src="" alt="">

        <p>Psicología</p>
        <img src="" alt="">

        <p>Medicina estética</p>
        <img src="" alt="">
    </section>

    <section>
        <h3 id="odontologia">Odontología</h3>
        <p>Tratamientos odontólogicos con equipos de última generación. Ofrecemos la mejor calidad en tratamientos personalizados.</p>
        <img src="" alt="">
        <p><b>Haz click en</b> 
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
            </svg> 
            para conocer más detalles de nuestros servicios.
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Ortodoncia</p>
        
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Blanqueamiento dental</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Protesis dental</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Implantología</p>
        <a href="#contacto">Pide tu cita</a>
    </section>

    <section>
        <h3 id="fisioterapia">Fisioterapia</h3>
        <p>Tratamientos odontólogicos con equipos de última generación. Ofrecemos la mejor calidad en tratamientos personalizados.</p>
        <img src="" alt="">
        <p><b>Haz click en</b> + para conocer más detalles de nuestros servicios.</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Lesiones deportivas</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Terapia con indiba</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>ATM (Bruxismo)</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Reeducación postural</p>
        <a href="#contacto">Pide tu cita</a>
    </section>

    <section>
        <h3 id="estetica">Estética</h3>
        <p>Tratamientos odontólogicos con equipos de última generación. Ofrecemos la mejor calidad en tratamientos personalizados.</p>
        <img src="" alt="">
        <p><b>Haz click en</b> + para conocer más detalles de nuestros servicios.</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Indiba facial</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Hidrfacial</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Depilación laser</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Ultrasonidos focalizados</p>
        <a href="#contacto">Pide tu cita</a>
    </section>

    <section>
        <h3 id="podologia">Podología</h3>
        <p>Tratamientos odontólogicos con equipos de última generación. Ofrecemos la mejor calidad en tratamientos personalizados.</p>
        <img src="" alt="">
        <p><b>Haz click en</b> + para conocer más detalles de nuestros servicios.</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Estudio biomécanico</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Quiropedia</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Prevención de lesiones</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Soluciones Ortopédicas</p>
        <a href="#contacto">Pide tu cita</a>
    </section>

    <section>
        <h3 id="psicologia">Psicología</h3>
        <p>Tratamientos odontólogicos con equipos de última generación. Ofrecemos la mejor calidad en tratamientos personalizados.</p>
        <img src="" alt="">
        <p><b>Haz click en</b> + para conocer más detalles de nuestros servicios.</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Terapia parejas</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Terapia familiar</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Terapia adultos</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>TERAPIA JUVENIL</p>
        <a href="#contacto">Pide tu cita</a>
    </section>

    <section>
        <h3 id="medicinaEstetica">Medicina estética</h3>
        <p>Tratamientos odontólogicos con equipos de última generación. Ofrecemos la mejor calidad en tratamientos personalizados.</p>
        <img src="" alt="">
        <p><b>Haz click en</b> + para conocer más detalles de nuestros servicios.</p>
        <p>Neuromodulación</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Rejuvenecimiento facial</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Hilos Tensores</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
        </svg>
        <p>Mesoterapia facial/corporal</p>
        <a href="#contacto">Pide tu cita</a>
    </section>

    <section>
        <h3 id="galeria">Galería</h3>
    </section>

    <section>
        <h3 id="contacto">Contacto</h3>
        <form action="">
            <fieldset>
                <legend></legend>

                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre">

                    <label>Correo electrónico</label>
                    <input type="email" placeholder="Tu email">
                </div>
                
                <div>
                    <label>Teléfono de contacto</label>
                    <input type="tel" placeholder="Tu teléfono">

                    <label>Clinica</label>
                    <select name="opciones-centro">
                        <option value="Villaverde">Centro médico LE SANTÉ Villaverde</option>
                        <option value="Ciudad de Barcelona">Centro médico LE SANTÉ Ciudad de Barcelona</option>
                    </select>

                </div>
                
                <div>
                    <label>Especialidad</label>
                    <select name="opciones-especialidad">
                        <option value="Odontología">Odontología</option>
                        <option value="Fisioterapia">Fisioterapia</option>
                        <option value="Estética">Estética</option>
                        <option value="Podología">Podología</option>
                        <option value="Psicología">Psicología</option>
                        <option value="Medicina estética">Medicina estética</option>
                    </select>

                    <label>Hora preferida</label>
                    <select name="opciones-hora">
                        <option value="Cualquier hora">A cualquier hora</option>
                        <option value="Mañana">Mañana (10:00-12:00)</option>
                        <option value="Medio día">Medio día (12:00-15:00)</option>
                        <option value="Tarde">Tarde (15:00-18:00)</option>
                        <option value="Tarde-noche">Tarde-noche (18:00-20:00)</option>
                    </select>
                </div>
                    
                <div>
                    <label>Tipo de consulta</label>
                    <input type="radio">
                    <label>primera consulta gratuita</label>
                    <input type="radio">
                    <label>Consulta general</label>
                </div>
                
                <div>
                    <label>Comentario adicional</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                    <input type="checkbox"><label>Aceptar la política de privacidad</label>
                    <input type="submit">
                </div>
            </fieldset>
        </form>
    </section>

    <footer>
      <!-- En desarrollo -->
    </footer>
</body>
</html>
```

## Contribución
Si deseas contribuir con mejoras o correcciones a este sitio web, ¡te animo a hacerlo! ponte en contacto conmigo en: adriancalvetedev@gmail.com

> "La gente no sabe lo que quiere hasta que se lo mostramos." - Steve Jobs


---
Hecho con ❤️ por Adrián Calvete
