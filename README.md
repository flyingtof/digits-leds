#### Programme permettant de simuler l’affichage de chiffres sur un écran LCD.

Cet écran dispose d’une grille composée d’éléments de taille 3x3. 

Chaque case peut contenir un espace, un tiret bas, ou un pipe.

Pour chaque chiffre, voici l’élément de taille 3x3 attendu (ici en utilisant un point à la place d’espace)

```
._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
```
Donc, la grille correspondante au nombre 910 serait :

```
._. ... ._.
|_| ..| |.|
..| ..| |_|
```

### Pré-requis:
- node-js > v10.13.0 (nvm use v10.13.0)
- yarn 

### Pour lancer le programme:
```shell script
sh ./test-numbers.sh
```

### Pour lancer les tests
```shell script
yarn test
```
