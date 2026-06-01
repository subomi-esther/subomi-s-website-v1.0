
const pageContent = document.getElementById('text')
const buttons = document.querySelectorAll('.pages')
const br = document.getElementById('buttons2')
const bre = document.getElementById('buttons')
const pageName = document.getElementById('pageName')
const ps = document.getElementById('photographsBody')
const as = document.getElementById('artworksBody')
const pb = document.getElementById('projectsBody')
const cancel = document.getElementById('cancel')
const popUp = document.getElementById('popUp')
const header = document.getElementById('header')
const menu = document.getElementById('menu')
const menuBar = document.getElementById('menu-bar')
const links = document.querySelectorAll('.links')
const texts = document.querySelectorAll('.text')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')

async function getPhotographs() {

    const url = './photographs.json'
    
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const photos = await response.json();
    // console.log(photos);
   getImage(photos)

     


} catch (error) {
    console.error(error.message);
  }


}
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
   "./Assets/images/artwork/20250906_160705.jpg" ,
    "./Assets/images/artwork/20250930_175832.jpg"
]
function getImage(photos){
  const images = [ ]

  for(let imge of photos) {
    images.push(imge.image)
  }

  // console.log(images);

  images.forEach(image => {
    const img = document.createElement('img') 
    img.src = image
    img.className = 'photos'
    
    ps.appendChild(img)


  })

   
  artworksImgs.forEach(art => {
    const artImg = document.createElement('img')
    const modalImg = document.createElement('img')
    const close = document.createElement('span')
    close.className = 'closeModal'
    close.innerHTML = `X`
  

    artImg.src = art
    artImg.className = 'photos'

    artImg.onclick = function(){
      console.log('clicked');
      modal.style.display = 'block'
      modalImg.src = art
      // console.log(modalImg);
      close.onclick = function(){
  modal.style.display = 'none'
 }
    }

    as.appendChild(artImg)
        // modal.appendChild(close)

    // modal.appendChild(modalImg)
  })


}


function displayProjects(projects){
  const id = []
  const year = []
  const name = []
  const pImg = []
  const link = []
  const tag = []

  for(let pro of projects) {
    id.push(pro.id)
    year.push(pro.year)
    name.push(pro. name)
    pImg.push(pro.image)
    link.push(pro.link)
    tag.push(pro.tags)

  }
//  console.log(id);
  // console.log(tag);



   id.forEach((ide, i) => {
      const project = document.createElement('div')
      project.className = 'projectMob'
      // console.log(id[i]);
      // project.id =  `${ide}id`
      project.id =  `${id[i]}`
      // console.log(project.id);
      // const projectM =  document.getElementById(`${ide}id`)

      // console.log(project);

      let image = document.createElement('img')
      let pName = document.createElement('p')
      let tagCon = document.createElement('div')
      let pYear = document.createElement('p')
      let pLink = document.createElement('div')
      let tagP = document.createElement('p')
      pLink.className= 'viewProjectBtn'
      

      // console.log(tag[i]);

      pName.innerHTML = `<p>Project Title: <span class="projectTitle">${ name[i]}</span></p>`
      pYear.innerHTML = `<p>Year: <span>${ year[i]}</span> </p>`
      image.src = pImg[i]
      // pLink.innerHTML = `<p>Link: <span><a href="${link[i]}">${link[i]}</a></span> </p>`
      pLink.innerHTML = ` <a href="${link[i]}">View Project</a>`
      tagP.textContent = 'Tags:'

      // tag.flat().forEach(tags => {
      //         const tagBtn = document.createElement('button')

      //         tagBtn.textContent = `${tags}`
              
      //         tagCon.appendChild(tagBtn)

      // })


     
    

      // tag.forEach((tags, i) => {
        // const tagBtn = document.createElement('button')

        //       tagBtn.textContent = `${tag[i]}`
        //      tagCon.appendChild(tagBtn)


             

      // })

    project.appendChild(image)
    project.appendChild(pName)
    // project.appendChild(tagCon)
    project.appendChild(pYear)
    project.appendChild(pLink)

      pb.appendChild(project)

    

   tagCon.appendChild(tagP)
    // console.log(project);
          // let width = window.innerWidth
      // if(width > 768) { 
        // document.getElementById(  `${id[i]}`).classList.remove('projecte')
        // document.getElementById(  `${id[i]}`).classList.add('projectMob')

      // }
        // console.log(buttons);
        



   })

  

}



// function openPages() {
//   buttons.forEach((btn, i) => {
//     btn.addEventListener('click', function(){
//       popUp.style.display = 'block'

//       pageName.textContent = btn.id
//       const clickedId = btn.id
//       const texts = document.querySelectorAll('.text')
//       texts.forEach((text, i)=> {
//       const textN = text.id

//       if(textN.includes(clickedId)){
//           document.getElementById(textN).style.display = 'grid'
                

//       } else if(!textN.includes(clickedId)) {
//           document.getElementById(textN).style.display = "none"
//       }

//       })



//     })

//   })

// }


  
  
  cancel.addEventListener('click', function(){
    popUp.style.display = 'none'
    console.log('cancel');
    
})
  function closeMenu(){
    // menu.classList.add('slideOut')
    menu.style.display = 'none'
    

  }

  menuBar.addEventListener('click', function(){
    menu.style.display = 'flex'
    // menu.classList.add('show')
  
  })
  links.forEach((link, i) => {
        link.addEventListener('click', function(){
         menu.style.display = 'none'
          popUp.style.display = 'block'
              // console.log(link.id);
          pageName.textContent = link.id
          const clickedId = link.id
          // console.log(clickedId);
          texts.forEach((text, i)=> {
          const textN = text.id

          if(textN.includes(clickedId)){
            //  console.log(textN);

            // console.log('hii');
              document.getElementById(textN).style.display = 'grid'
              document.getElementById(textN).classList.add('paged')
              header.style.display = 'flex'
              popUp.classList.remove('popUp')
              popUp.classList.add('popdown')
              // header.classList.remove('header')

              // header.classList.add('headerMob')
              cancel.style.display = 'none'
              
              pb.classList.add('proMob')

              document.getElementById('contactsText').classList.add('con')

                    

          } else if(!textN.includes(clickedId)) {
              document.getElementById(textN).style.display = "none"
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
        // console.log(buttons);
        
        // br.style.display = 'none'
        // bre.style.display = 'none'
        menuBar.style.display ='flex'
       as.style.gridTemplateColumns =  "1fr 1fr"
       pb.style.gridTemplateColumns =  "1fr"
       ps.style.gridTemplateColumns =  "1fr 1fr"

      } else if (width > 1024) {
        menu.style.display = 'flex'
      // productImg[i].src = tabletImages[i]

      } 
  //     else {  
        
  //       setTimeout(() => {
  //   popUp.style.display = 'block'

  // }, 2500);


  //     }

getPhotographs()
getProjects() 
// openPages()