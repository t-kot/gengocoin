# 環境構築

- node v8.11.1
```
$ ndenv install v8.11.1
$ ndenv rehash
$ node -v # v8.11.1
$ npm install -g ganache-cli
$ npm install -g truffle
$ npm install -g yarn
$ cd path/to/gengocoin
$ truffle compile
$ truffle migrate
```


# ブロックチェーン立ち上げ

```
$ ganache-cli -b 3
```

# contractを流し込む

```
$ truffle migrate --reset
```

# dev server

```
$ yarn start
```


# Trouble shooting

## Cannot read property 'address' of undefined

contractがブロックチェーンに登録されていない。
chain立ち上げ後、migrateを実行する必要がある
