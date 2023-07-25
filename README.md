## Bold Test

Para instalar e testa o projeto, verifique se você esta com o ambiente configurado baseado nesse [tutorial](https://react-native.rocketseat.dev/).

> ⚠️ **Projeto criado e validado usando yarn**:

Instalação do yarn

```bash
npm install --global yarn
```

Verifique se a instalação deu certo.

```bash
yarn --version
```

## Testando o projeto

Para instalar as depedencias

```bash
yarn
```

Para gerar as pastas nativas do projeto.
**Saiba mais sobre o [prebuild](hhttps://docs.expo.dev/workflow/prebuild/)**

```bash
yarn prebuild
```

Para iniciar o dev server

```bash
yarn start
```

Realizar o build no ios

```bash
yarn ios
```

Realizar o build no ios

```bash
yarn android
```

> ⚠️ **Atenção**: Em alguns casos pode dar um erro de build no android porque o android studio não consigue criar e ler arquivos na pasta do projeto, é preciso dar permição para o grandlew realizar o build, recomendo executar o comando abaixo na raiz do projeto.

```bash
chmod 777 android/gradlew
```

> ⚠️ **Atenção**: Eveite executar o projeto em diretorios com espaço no seu caminho, pode ocorrer falhas no build do android studio.

## Dicas

**Sempre que for instalar uma lib que altere com a configuração native instale com a [cli do expo](https://www.npmjs.com/package/expo-cli)**

Exemplo de instalação

**Limpar Cache Yarn**

Na raiz do projeto execute

```bash
rm -rf node_modules
```

```bash
rm -fr $TMPDIR/haste-map-*
```

```bash
rm -rf $TMPDIR/metro-cache
```

```bash
yarn cache clean
```

**Executar o dev server sem cache**

```bash
yarn start -c
```

**Limpar o cache do simuladores do ios**

```bash
rm -rf ~/Library/Developer/Xcode/DerivedData/*
```

**Ver logs nativo no android**

```bash
adb logcat
```

## Referência

- [Expo](https://expo.dev/)
- [Styled Components](https://styled-components.com/)
- [FlashList](https://shopify.github.io/flash-list/)
- [SWR](https://swr.vercel.app/)

## Autor

- [@igorcesarcode](https://www.github.com/igorcesarcode)
