// Получаем имя проекта

import { scryptSync } from 'crypto';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = "./dist"; // пути к папкам
const srcFolder = "./src";

const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
        svgiconsresult: `${buildFolder}/img/icons/`
    },                                                 //объект к папке с результатом
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },                                                //объект путей к исходным файлам
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        files: `${srcFolder}/files/**/*.*`
    },                                        //объект за которым следит галп
    clean: buildFolder,          //свойство присвоеное
    buildFolder: buildFolder,    //папка с результатом
    srcFolder: srcFolder,        //папка с исходниками
    rootFolder: rootFolder,      //название текущей папки проекта
    ftp: 'test'                      //папка на удаленном сервере
}
export default path;
