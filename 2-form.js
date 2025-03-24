import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let t={email:"",message:""};const o=document.querySelector(".feedback-form"),s=o.elements.email,a=o.elements.message,r="feedback-form-state";l();o.addEventListener("input",n);o.addEventListener("submit",i);function n(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(r,JSON.stringify(t))}function l(){const e=localStorage.getItem(r);e&&(t=JSON.parse(e),s.value=t.email||"",a.value=t.message||"")}function i(e){if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log("Submitted data:",t),t={email:"",message:""},localStorage.removeItem(r),o.reset()}document.body.style.cssText=`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
`;o.style.cssText=`
  max-width: 90%;
  width: 408px;
  padding: 24px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;const c=o.querySelectorAll("input, textarea, button");c.forEach(e=>{e.type!=="submit"?e.style.cssText=`
      width: 360px;
      margin-bottom: 8px;
      padding: 8px 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #808080;
      font-family: Montserrat, sans-serif;
      transition: border-color 0.3s;
    `:(e.style.cssText=`
      width: 95px;
      padding: 8px;
      border: none;
      border-radius: 8px;
      background-color: #4E75FF;
      color: #fff;
      font-size: 16px;
      line-height: 1.5;
      font-weight: 500;
      text-align: center;
      font-family: Montserrat, sans-serif;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 16px;
    `,e.addEventListener("mouseover",()=>{e.style.backgroundColor="#0056b3"}),e.addEventListener("mouseout",()=>{e.style.backgroundColor="#4E75FF"}))});const d=o.querySelectorAll("label");d.forEach(e=>{e.style.cssText=`
    display: flex;
    flex-wrap: wrap;
    // width: 360px;
    margin-bottom: 8px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #2E2F42;
  `});
//# sourceMappingURL=2-form.js.map
