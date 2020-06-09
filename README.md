## 環境構築

### 起動
```
$ docker-compose up -d
```

### サンプルデータ投入
```
$ docker-compose exec api rake db:seed
```

## 環境

API:   http://localhost:3000
FRONT: http://localhost:8080

## テスト

### Unit
```
$ docker-compose exec front yarn test:unit
```

常時ファイル監視
```
$ docker-compose exec front yarn test:unit --watchAll
```

### E2E
```
$ docker-compose up e2e
```

`front\tests\e2e\screenshots` にテスト結果のスクリーンショットが保存される。

## フロントのビルド
出力先: /api/public
```
$ docker-compose exec front /build.sh
```
