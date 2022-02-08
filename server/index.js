const express = require("express");
const app = express();
const cors = require("cors");
const bll = require("./bll");
const multer = require("multer");
//const upload = multer({ dest: "uploads/" });
const path = require("path");

const bodyParser = require("body-parser");

const uploadPath = path.join(__dirname, "uploads");

app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(uploadPath));

app.get("/images", (req, res) => {
  res.send("lalala");
});

app.post("/savePicture", (req, res) => {
  const base64 = JSON.stringify(req.body.image);

  const id = bll.makeId(10);
  let updateBase64 = base64.split(",");
  let bufferPartOfBase64 = updateBase64[1];

  
  if(!updateBase64[0].includes("data:image") || updateBase64[0] === undefined){
    bll.saveUrlPicture(id,base64).then((message) =>{
      res.send({ message:`${message}`})
    })
  }
  else{
    let buf = Buffer.from(bufferPartOfBase64, "base64");
    console.log(buf);
  
    let imageFormat = updateBase64[0].match(/\b\/(\w+);\b/);
    console.log(imageFormat[1]);
  
    if (imageFormat && imageFormat[1]) {
      bll.savePicture(buf, id, imageFormat[1]).then((res) => {
        console.log(res);
      });
    } else {
      res.send("this is not a picture");
    }
  }
});

app.get("/all-photos", (req, res) => {
  bll.getAllPhotes().then((list) => {
    console.log(list);
    res.send(list);
  });
});

app.get("/all-categories", (req, res) => {
  bll.getAllCategories().then((list) => {
    res.send(list);
  });
});

app.post("/editPicture", (req, res) => {
  const picture = req.body.image;
  console.log(picture);
  bll.getAllPhotes().then((list) => {
    bll.getIndexOfOnePicture(picture.id).then((index) => {
      list.splice(index, 1, picture);
      bll.newJsonFile(list).then((list) => {
        let message = { message: "picture saved succfuly" };
        res.send(message);
      });
    });
  });
});

app.post("/privateMode", (req, res) => {
  const password = req.body;
  bll.isPasswordMach(password).then((boolean) => {
    if (boolean)
      res.send({ message: "you are in private mode ;)", isTrue: "true" });
    else res.send({ message: "the password not mach", isTrue: "false" });
  });
});

app.get("/all-private-photos", (req, res) => {
  bll.getAllPrivatePhotos().then((list) => {
    console.log(list);
    res.send(list);
  });
});

app.get("/all-unprivate-photos", (req, res) => {
  bll.getAllUnPrivatePhotos().then((list) => {
    console.log(list);
    res.send(list);
  });
});

app.post("/add-category", (req, res) => {
  const newCategory = req.body;
  console.log(newCategory.category);
  bll.addCategory(newCategory.category).then((list) => {
    res.send(list);
  });
});

app.post("/delete-category", (req, res) => {
  const newCategory = req.body;
  console.log(newCategory.category);
  bll.deleteCategory(newCategory.category).then((list) => {
    res.send(list);
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app is listen on ${port}`);
});
