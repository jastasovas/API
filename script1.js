const imgContainer = document.createElement("div");
const myImage = document.createElement("img");
const imgBtn = document.createElement("button");
imgBtn.innerText = "Change image!";
document.body.append(imgBtn, imgContainer);
imgContainer.append(myImage);

const newPhoto = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const dataLink = await res.json();
  console.log(dataLink);

  myImage.src = dataLink.message;
};
newPhoto();
imgBtn.addEventListener("click", newPhoto);
