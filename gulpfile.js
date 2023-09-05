const {src, dest, watch} = require('gulp');
const sass = (require('gulp-sass'))(require('sass'));
//src sirve para identificar archivo
//dest para guardar

function css(done){
    src('src/scss/app.scss')//Identificar el archivo SASS 
    .pipe(sass())    //Compilar
    .pipe(dest('build/css'))//Almacenar en el disco duro


    done();//Callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch('src/scss/app.scss', css)

    done()
}// nos permite crear la funcion de escucha con app.scss (actualizacion en tiempo)


exports.css = css;
exports.dev =dev;
