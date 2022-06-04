// i tried to do something so diffrent to prove that this code is implemented from my selfe skills and by using 
// this web sites to get any information about any function or events i wanted to implement for this project.
// MDN , w3schools , stackoverflow.

// get and select my button
const myButton = document.getElementById("my__button");
let i = 0;
// it is event by click
myButton.addEventListener("click",function creatContent(){
        i+=1;
// get and select my div       
  const section_content = document.querySelector('#section_content');
  // creat this piece of html that represent my section
  let html_section =`<section id="section${i}" data-nav="Section ${i}" >
  <div class="landing__container">
    <h2>Section ${i}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>`
  // add my section to specific position
  section_content.insertAdjacentHTML("beforeend", html_section);
    
        let section_id = `section${i}`;
        // select ul element 
        const navbar__list = document.querySelector('#navbar__list');
        // creat this piece of html that represent every nav bar for every section
        let html_nav = `<li id="nav_id${i}"><a href ="#${section_id}" data-nav = "${section_id}" class="menu__link">Section ${i}</a></li>`
        // add this li element for specific position
        navbar__list.insertAdjacentHTML("beforeend", html_nav);
        // by click on navbar button implement this event 
        document.getElementById(`nav_id${i}`).addEventListener('click', function (e) {
          e.preventDefault();
          // if target of click on the navbar that represent this attribute
          if (e.target.dataset.nav){
            // scroll to the section that linked by navbar smoothly
            document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({ behavior:"smooth"});
          }
        })
        
 }); 

// on window scroll
window.addEventListener('scroll', (event) => {
    const sections = Array.from(document.querySelectorAll("section"));
    // loop through each section
    sections.forEach( section => {
  
      // get px distance from top
      const topDistance = section.getBoundingClientRect().top;
  
      // if the distance to the top is between 0-100px
      if (topDistance > 0 && topDistance < 100) {
        section.classList.add('your-active-class');
        document.querySelector(`a[data-nav="${section.id}"]`).classList.add("navbar_active");
      // otherwise, remove the class
      } else {
        section.classList.remove('your-active-class');
        document.querySelector(`a[data-nav="${section.id}"]`).classList.remove("navbar_active");
      }
    });
  });
   
  
