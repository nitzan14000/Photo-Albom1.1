const { ifError } = require("assert");
const fs = require("fs");
const path = require("path");

const uploadPath = path.join(__dirname, "uploads");
const picturePath = "http://localhost:4000/";
const jsonDataPicturePath = path.join(
  __dirname,
  "data_base",
  "dataPictures.json"
);
const jsonDataCategoreisPath = path.join(
  __dirname,
  "data_base",
  "dataCategories.json"
);
const jsonDataPrivateMode = path.join(
  __dirname,
  "data_base",
  "privateMode.json"
);
const pictureModel = {
  url: "1s",
  id: "",
  title: "",
  category: "",
  location: "",
  favorite: false,
  privateMood: false,
};

function WriteToTextFile(path, newJsonData, resAnswer) {
  return new Promise((res, rej) => {
    fs.writeFile(path, newJsonData, (err) => {
      if (err) rej("Can Not Save This File in Uploads");
      res(resAnswer);
    });
  });
}

const savePicture = (buf, id, end) => {
  return new Promise((res, rej) => {
    res(
      WriteToTextFile(
        path.join(uploadPath, `${id}.${end}`),
        buf,
        "append Successfully in Uload file"
      ),
      writetToJsonFile(createModel(id, end))
    );
  });
};

const saveUrlPicture = (id, url) => {
  return new Promise((res, rej) => {
    res(writetToJsonFile(createModelOfUrl(id, url)));
  });
};

const createModelOfUrl = (id, url) => {
  const u = url.replace('"', "");
  const l = u.replace('"', "");
  pictureModel.url = l;
  pictureModel.id = id;
  return pictureModel;
};

const createModel = (id, end) => {
  let url = picturePath + id + "." + end;
  pictureModel.url = url;
  pictureModel.id = id;
  return pictureModel;
};

const writetToJsonFile = (pictureModel) => {
  let jsonContent = JSON.stringify(pictureModel, null, 2);
  if (!jsonContent) return;

  return new Promise((res, rej) => {
    try {
      fs.readFile(jsonDataPicturePath, "utf-8", (err, jsonString) => {
        if (!jsonString || !jsonString.trim()) {
          jsonContent = `{"pictures":[${jsonContent}]}`;
          res(
            WriteToTextFile(
              jsonDataPicturePath,
              jsonContent,
              'your first picture saved succefuly'
            )
          );
        } else if (err) {
          console.log("somthig went wrong");
        } else {
          //console.log(jsonString+'irfughrewug');
          const data = JSON.parse(jsonString);
          //console.log(data);
          data.pictures.push(pictureModel);
          //console.log(data);
          var newJsonData = JSON.stringify(data, null, 2);
          res(
            WriteToTextFile(
              jsonDataPicturePath,
              newJsonData,
              "picture saved succfuly"
            )
          );
        }
      });
    } catch (error) {
      console.log(`lo halch tov yachbibi`);
    }
  });
};

function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getAllPhotes = () => {
  return new Promise((res, rej) => {
    fs.readFile(jsonDataPicturePath, (err, jsonString) => {
      if (err) console.log("You didnt raise any photos");
      const data = JSON.parse(jsonString);
      res(data.pictures);
    });
  });
};

const getAllCategories = () => {
  return new Promise((res, rej) => {
    fs.readFile(jsonDataCategoreisPath, (err, jsonString) => {
      const data = JSON.parse(jsonString);
      res(data.categoreis);
    });
  });
};
const getOnePicture = (id) => {
  return new Promise((res, rej) => {
    res(getAllPhotes().then((list) => findObject(list, id)));
  });
};
const getIndexOfOnePicture = (id) => {
  return new Promise((res, rej) => {
    res(getAllPhotes().then((list) => findObjectByIndex(list, id)));
  });
};
const findObject = (list, id) => {
  return new Promise((res, rej) => {
    const s = list.find((l) => l.id === id);
    res(s);
  });
};

const findObjectByIndex = (list, id) => {
  return new Promise((res, rej) => {
    const s = list.findIndex((l) => l.id === id);
    res(s);
  });
};
const newJsonFile = (list) => {
  return new Promise((res, rej) => {
    let jsonList = JSON.stringify(list);

    let jsonContent = `{"pictures":${jsonList}}`;
    fs.writeFile(jsonDataPicturePath, jsonContent, (err) => {
      if (err) rej("there no new jsonFile");
      res("there is new jsonfile");
    });
  });
};

const isPasswordMach = (password) => {
  return new Promise((res, rej) => {
    fs.readFile(jsonDataPrivateMode, (err, data) => {
      if (err) console.log("cant read the file for some reasen");
      const dataPassword = JSON.parse(data);
      if (dataPassword.password === password.password) {
        res(true);
      }
      return res(false);
    });
  });
};

const getAllPrivatePhotos = () => {
  return new Promise((res, rej) =>
    res(getAllPhotes().then((list) => filterPrivateList(list)))
  );
};
const filterPrivateList = (list) => {
  return new Promise((res, req) => {
    const l = list.filter((list) => list.privateMood === true);
    res(l);
  });
};

const getAllUnPrivatePhotos = () => {
  return new Promise((res, rej) =>
    res(getAllPhotes().then((list) => filterList(list)))
  );
};
const filterList = (list) => {
  return new Promise((res, req) => {
    const l = list.filter((list) => list.privateMood !== true);
    res(l);
  });
};

const addCategory = (newCategory) => {
  return new Promise((res, rej) => {
    getAllCategories().then((list) => {
      includCategory(list, newCategory).then((data) => {
        //sole.log(data);
        if (data) rej("category already Exist");
        else {
          pushCategory(list, newCategory).then((t) => {
            console.log(t);
            writeToJsonFileCategories(t).then((l) => {
              res(t);
            });
          });
        }
      });
    });
  });
};
const includCategory = (list, newCategory) => {
  return new Promise((res, rej) => {
    const isCategoryExit = list.includes(newCategory);
    res(isCategoryExit);
  });
};
const pushCategory = (list, newCategory) => {
  return new Promise((res, rej) => {
    const s = list.push(newCategory);
    res(list);
  });
};
const writeToJsonFileCategories = (list) => {
  return new Promise((res, rej) => {
    let jsonList = JSON.stringify(list);

    let jsonContent = `{"categoreis":${jsonList}}`;
    fs.writeFile(jsonDataCategoreisPath, jsonContent, (err) => {
      if (err) rej("there no new jsonFile");
      res("there is new jsonfile");
    });
  });
};

const deleteCategory = (category) => {
  return new Promise((res, rej) => {
    getAllCategories().then((list) => {
      includCategory(list, category).then((isCategoryExit) => {
        //sole.log(data);
        if (!isCategoryExit) rej("category NOT Exist");
        else {
          removeFromArray(list, category).then((list) => {
            writeToJsonFileCategories(list).then((m) => {
              res(list);
            });
          });
        }
      });
    });
  });
};
const removeFromArray = (categoriesList, category) => {
  return new Promise((res, rej) => {
    const indexOfDeletedItem = categoriesList.indexOf(category);
    const n = categoriesList.splice(indexOfDeletedItem, 1);
    res(categoriesList);
  });
};

module.exports = {
  savePicture,
  makeId,
  getAllPhotes,
  getAllCategories,
  getOnePicture,
  getIndexOfOnePicture,
  newJsonFile,
  isPasswordMach,
  getAllPrivatePhotos,
  getAllUnPrivatePhotos,
  addCategory,
  deleteCategory,
  saveUrlPicture,
};
