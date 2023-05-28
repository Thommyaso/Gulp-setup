1. linter wyrzuca mi blad: 'gulp-sass' should be listed in the project's dependencies, not devDependencies. (tak samo do babel i gulp). Wiec przenioslem je z devDependencies do dependecies. Czy to jest wlasciwe rozwiazanie? na stronie npm w instrukcjach do tychplikow bylo napisane zeby instalowac je do --save-dev

2. jak spojrzysz na pliki js w folderze src to zobaczysz ze wyeksporotwalem tylko 1 var do main.js ale console.log z app.js sie i tak pokazuje. Czy to jest ok?

3. W gulpfile.js/javascript.js slyszalem ze w gulp 4 nie trzeba instalowac paczki sourcemaps bo jest to juz wgrane w gulpa ale nie udawalo mi sie ustawic map bez instalowania tego pluginu.

4. jak spojrzysz na pliki w folderze gulpfile.js to zobaczysz ze na gorze kazdego pliku musialem ustawiac:

        /* eslint-disable import/no-extraneous-dependencies */

bez tego es-lint wywalal mi blad ze powinienem te packi instalowac w dependencies a nie w devDependencies.
