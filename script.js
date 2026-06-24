
// const pageContent = document.getElementById('text')
// const buttons = document.querySelectorAll('.pages')
const br = document.getElementById('buttons2')
const bre = document.getElementById('buttons')
const pageName = document.getElementById('pageName')
const photographs = document.getElementById('photographsBody')
const artworks = document.getElementById('artworksBody')
const projectBody = document.getElementById('projectsBody')
const popUp = document.getElementById('popUp')
const header = document.getElementById('header')
const menu = document.getElementById('menu')
const menuBar = document.getElementById('menu-bar')
const links = document.querySelectorAll('.links')
const pages = document.querySelectorAll('.page')
const closeModal = document.getElementById('closeModal')

// async function getPhotographs() {

//     const url = './photographs.json'
    
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const photos = await response.json();
//     // console.log(photos);
//    getImage(photos)

     


// } catch (error) {
//     console.error(error.message);
//   }


// }
async function getProjects() {

    const url = './project.json'
    
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const projects = await response.json();
    console.log(projects);
  displayProjects(projects)



} catch (error) {
    console.error(error.message);
  }


}

const artworksImgs = [

   "./Assets/images/artwork/20251025_154218.jpg",
   "./Assets/images/artwork/20260421_165520.jpg",
   "./Assets/images/artwork/20260412_174337.jpg",
   "./Assets/images/artwork/20260401_184042.jpg",
   "./Assets/images/artwork/20260313_151815.jpg",
   "./Assets/images/artwork/20260123_185541.jpg",
   "./Assets/images/artwork/20260116_180507.jpg",
   "./Assets/images/artwork/20260102_182708.jpg",
   "./Assets/images/artwork/20260102_182640.jpg",
   "./Assets/images/artwork/20251216_181416.jpg",
   "./Assets/images/artwork/20251214_172236.jpg",
   "./Assets/images/artwork/20251204_150515.jpg",
   "./Assets/images/artwork/20251120_172120.jpg",
   "./Assets/images/artwork/20251117_174843.jpg",
   "./Assets/images/artwork/20251117_141406.jpg",
   "./Assets/images/artwork/20251114_172321.jpg",
   "./Assets/images/artwork/20251106_165117.jpg",
   "./Assets/images/artwork/20251030_134738.jpg",
   "./Assets/images/artwork/20251028_100215.jpg",
   "./Assets/images/artwork/20251027_123357.jpg",
   "./Assets/images/artwork/20251025_152000.jpg",
   "./Assets/images/artwork/20251018_171556.jpg",
   "./Assets/images/artwork/20251016_162047.jpg",
   "./Assets/images/artwork/20251004_174945.jpg",
 
   "./Assets/images/artwork/20250921_174749.jpg",
   "./Assets/images/artwork/20250921_174745.jpg",
   "./Assets/images/artwork/20250921_174723.jpg",
   "./Assets/images/artwork/20250919_175339.jpg",
   "./Assets/images/artwork/20250906_160705.jpg" 
    // "./Assets/images/artwork/20250930_175832.jpg"
]
function getImage(photos){
  const images = [ ]

  for(let imgs of photos) {
    images.push(imgs.image)
  }


  images.forEach(image => {
    const img = document.createElement('img') 
    img.src = image
    img.className = 'photos'
    
    photographs.appendChild(img)


  })

   
  artworksImgs.forEach(art => {
    const artImg = document.createElement('img')
    artImg.src = art
    artImg.className = 'photos'

    artworks.appendChild(artImg)

  })


}


function displayProjects(projects){
  const id = []
  const year = []
  const name = []
  const pImg = []
  const link = []
  // const tag = []

  for(let project of projects) {
    id.push(project.id)
    year.push(project.year)
    name.push(project. name)
    pImg.push(project.image)
    link.push(project.link)
    // tag.push(project.tags)

  }


   id.forEach((ide, i) => {
      const project = document.createElement('div')
      project.className = 'projectDiv'

      project.id =  `${id[i]}`


      let image = document.createElement('img')
      let pName = document.createElement('p')
      // let tagCon = document.createElement('div')
      let pYear = document.createElement('p')
      let pLink = document.createElement('div')
      // let tagP = document.createElement('p')
      pLink.className= 'viewProjectBtn'
      
      pName.innerHTML = `<p>Project Title: <span class="projectTitle">${ name[i]}</span></p>`
      pYear.innerHTML = `<p>Year: <span>${ year[i]}</span> </p>`
      image.src = pImg[i]
      pLink.innerHTML = ` <a href="${link[i]}">View Project</a>`

    project.appendChild(image)
    project.appendChild(pName)
    // project.appendChild(tagCon)
    project.appendChild(pYear)
    project.appendChild(pLink)

    projectBody.appendChild(project)

    


   })

  

}


  // function closeMenu(){
  //   // menu.classList.add('slideOut')
  //   menu.style.display = 'none'
    

  // }

  menuBar.addEventListener('click', function(){
    menu.style.display = 'flex'
  
  })
  links.forEach((link, i) => {
        link.addEventListener('click', function(){
        menu.style.display = 'none'
        popUp.style.display = 'block'
        pageName.textContent = link.id
        const clickedId = link.id
        
        pages.forEach((page)=> {
          const openedPage = page.id

          if(openedPage.includes(clickedId)){

            document.getElementById(openedPage).style.display = 'grid'
            header.style.display = 'flex'


                    

          } else if(!openedPage.includes(clickedId)) {
              document.getElementById(openedPage).style.display = "none"
          }

          })
        })
   })
  function backToHome() {
   popUp.style.display = 'none'
   menu.style.display = 'none'

  }
  
  let width = window.innerWidth
  if(width < 768) {

    menu.style.display = 'flex'

    artworks.style.gridTemplateColumns =  "1fr"
    projectBody.style.gridTemplateColumns =  "1fr"
    photographs.style.gridTemplateColumns =  "1fr"

      } else if (width > 1024) {
        menu.style.display = 'flex'

      } 


// getPhotographs()
getProjects() 
