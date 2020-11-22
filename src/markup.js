let divRoot = document.getElementById("root");

//creating container
const employeeCon = (element) => {
  const divCon = document.createElement("div");
  divCon.classList.add("trainee-content");
  //----------
  return divCon;
};

const employeeImg = (element) => {
  const divimg = document.createElement("div");
  divimg.classList.add("trainee-pic");

  //--------------- img tag
  const img = document.createElement("img");
  img.src = "https://bit.ly/2ULBUfn";
  //img.src = element.picUrl;
  img.alt = element.firstName;
  img.classList.add("trainee-realpic");
  //--------
  divimg.appendChild(img);
  //---------------
  return divimg;
};

const employeePara = (element) => {
  const para = document.createElement("p");
  para.id = element.id;
  para.classList.add("trainee-name");
  //-------------------a tag
  const a = document.createElement("a");
  a.innerHTML = `${element.firstName} ${element.lastName}`;
  a.href = element.profileUrl;
  a.target = "_blank";
  a.classList.add("trainee-link");
  //---------br tag
  const br = document.createElement("br");
  //---------------span tag
  const span = document.createElement("span");
  span.innerHTML = element.Company;
  span.classList.add("company");

  //----------------
  para.appendChild(a);
  para.appendChild(br);
  para.appendChild(span);
  //-----
  return para;
};

Trainees.map((element) => {
  const cont = employeeCon(element);
  divRoot.appendChild(cont);
  const imgcon = employeeImg(element);
  const para = employeePara(element);
  cont.appendChild(imgcon);
  cont.appendChild(para);
});
