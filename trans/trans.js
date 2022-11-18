const translate = require('google-translate-api');

const trans = {};

trans.tranlate_lang = function(word){
    let text = new Array();
    return new Promise(async (resolve, reject) => {
        let arrLang = ['ko','en','th'];

        for(let i=0;i<arrLang.length;i++){
            
            await translate(word, {to:arrLang[i]}).then( async res => {
                text[i] = "[" + arrLang[i] + "] : " + res.text + "";
                
            }).catch(err => {
                text[i] = "[" + arrLang[i] + "] : ERROR => " + err + "";
                reject(text[i]);
            });
        }
        resolve(text);
    }).catch((err) => {
        reject(err);
    })
}

module.exports = trans;