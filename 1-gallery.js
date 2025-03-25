import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as s}from"./assets/vendor-CgTBfC_f.js";const r=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],l=r.map(({preview:t,original:o,description:a})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${t}"
        alt="${a}"
      />
    </a>
  </li>
`).join("");document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".gallery");t.innerHTML=l,t.style.cssText=`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 16px; 
    padding: 0;
    margin: 20px auto;
    list-style: none;
    max-width: 1128px;
  `,document.querySelectorAll(".gallery-item").forEach(e=>{e.style.cssText=`
      border-radius: 8px;
      overflow: hidden;
    `}),document.querySelectorAll(".gallery-image").forEach(e=>{e.style.cssText=`
      width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out;
      border-radius: 8px;
    `,e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"})}),new s(".gallery a",{captionsData:"alt",captionDelay:250,captions:!1});const n=document.createElement("style");n.innerHTML=`
    .sl-overlay {
      background: #2E2F42CC !important;
    }
  `,document.head.appendChild(n);const p=document.createElement("style");p.innerHTML=`
    .sl-prev, .sl-next, .sl-close {
      color: #ffffff !important;
    }
    .sl-prev::after, .sl-next::after, .sl-close::after {
      border-color: #ffffff !important;
    }
  `,document.head.appendChild(p);const i=document.createElement("style");i.innerHTML=`
    .sl-counter {
      color: #ffffff !important;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      font-family: Montserrat, sans-serif;
    }
  `,document.head.appendChild(i)});
//# sourceMappingURL=1-gallery.js.map
