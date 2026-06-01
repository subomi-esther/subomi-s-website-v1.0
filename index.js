
const startBtn = document.getElementById('startBtn')
const frontPage = document.getElementById('frontPage')
const main = document.getElementById('main')
const main2 = document.getElementById('main2')
const aboutMe = document.getElementById('about')
const experience = document.getElementById('experience')
const contacts = document.getElementById('contacts')
const projects = document.getElementById('projects')
const photographs = document.getElementById('photographs')
const artworks = document.getElementById('artworks')
const text = document.getElementById('text')
const home = document.getElementById('home')
const aText = document.getElementById('aText')
const cText = document.getElementById('cText')
const pages = document.querySelectorAll('.pages')
const body = document.querySelectorAll('.body')
const pager = document.querySelectorAll('.pager')
const li = document.querySelectorAll('li')
const ps = document.getElementById('photographsBody')
const as = document.getElementById('artworksBody')
// console.log(li);

const pageName = document.getElementById('pageName')

async function getPhotographs() {

    const url = './photographs.json'
    
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const photos = await response.json();
    console.log(photos);
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
   "./Assets/images/artwork/20250930_175832.jpg",
   "./Assets/images/artwork/20250921_174749.jpg",
   "./Assets/images/artwork/20250921_174745.jpg",
   "./Assets/images/artwork/20250921_174723.jpg",
   "./Assets/images/artwork/20250919_175339.jpg",
   "./Assets/images/artwork/20250906_160705.jpg"
]


function getImage(photos){
  const images = [ ]

  for(let imge of photos) {
    images.push(imge.image)
  }

  console.log(images);

  images.forEach(image => {
    const img = document.createElement('img') 
    img.src = image
    
    ps.appendChild(img)


  })

   
  artworksImgs.forEach(art => {
    const artImg = document.createElement('img')
    
    artImg.src = art

    as.appendChild(artImg)
  })


    

}


startBtn.addEventListener('click', function (){
    // alert('hii')
    console.log('hii');
    frontPage.style.display = 'none'
    main.style.display = 'block'
}
)
      // let image = document.createElement('img')    
      //   image.setAttribute('src', 'assets/images/icon-remove-item.svg')  



function openPages(){
    // aboutMe.addEventListener('click', function(){
    //     pageName.textContent = `about`
    //     aText.hidden = false
    //     text.style.display = 'none'
    // })
    // experience.addEventListener('click', function(){
    //     pageName.textContent = `experience`
    // })
    // contacts.addEventListener('click', function(){
    //     pageName.textContent = `contacts`
    //     cText.style.display = 'grid'
  
    // })
    // projects.addEventListener('click', function(){
    //     pageName.textContent = `projects`
    // })
    // photographs.addEventListener('click', function(){
    //     pageName.textContent = `photographs`
    // })
    // artworks.addEventListener('click', function(){
    //     pageName.textContent = `artworks`
    // })
   pages.forEach((page, i) => {
    page.addEventListener('click', function(){
        // console.log(page);
        pageName.textContent = page.id
        const clickedId = page.id
        const texts = document.querySelectorAll('.text')
        // console.log(texts);
        texts.forEach((text, i)=> {
            const textN = text.id

            if(textN.includes(clickedId)){
                // console.log('nicee');
                document.getElementById(textN).style.display = 'grid'
                

            } else if(!textN.includes(clickedId)) {
                document.getElementById(textN).style.display = "none"
            }

        })


    })

   })


   pager.forEach((paged, i)=> {
    paged.addEventListener('click', function() {
      const pageId = paged.id

      body.forEach((boy, i)=> {
        const bodyN = boy.id

        if(bodyN.includes(pageId)) {
        main2.style.display = 'grid'
          main.style.display = 'none'
          document.getElementById(bodyN).style.backgroundColor = 'grid'
          

       }else if(!bodyN.includes(pageId)) {
        document.getElementById(bodyN).style.display = "none"
        
         }
      })
       

    })
   })




}



openPages()


getPhotographs()
getProjects() 